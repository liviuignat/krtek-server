import Krtek from 'krtek';

const krtek = new Krtek({
  minify: false
});

krtek.on('started', () => console.log(`Krtek is running on ${krtek.host}:${krtek.port}`));

krtek.on('configure-js', req => {
  console.log(req.query.js);
  krtek.jsCode = `
    import React from 'react';
    import {render} from 'react-dom';
    import * as App from './src/components';

    const props = ${req.query.data};

    const DefaultMainComponent = () => (
      <App.Header>

        <App.PrimaryHeaderNavigation>
          <App.Masthead />

          <App.PrimaryNavigation>
            <App.LogoLink text="Telia" />
            <App.MarketplaceHeaderLink />
            <App.LoginHeaderLink />
          </App.PrimaryNavigation>
        </App.PrimaryHeaderNavigation>

      </App.Header>
    );
    // const MainComponent = () => (${req.query.js});
    const MainComponent = () => <DefaultMainComponent />;

    render(<MainComponent />, document.getElementById("${req.query.id}"));
  `;
});

krtek.on('bundle-done', (req, res, data) => {
  res.write(data);
  res.end();
});

krtek.start();
