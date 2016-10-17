import React from 'react';

export const Masthead = () => {
  return (
    <div className="custom-masthead">
      <nav className="custom-masthead-nav">
        <ul className="custom-masthead-nav-items adb-layout-default">
          <li className="custom-masthead-nav-item custom-masthead-nav-item__left">
            <a className="custom-masthead-nav-link" href="http://www.telia.se/privat/?teliase_top_private">
              Personal
            </a>
          </li>

          <li className="custom-masthead-nav-item custom-masthead-nav-item__left custom-masthead-nav-item--active">
            <a className="custom-masthead-nav-link" href="http://www.telia.se/foretag/?teliase_top_foretag">
              Business
            </a>
          </li>

          <li className="custom-masthead-nav-item custom-masthead-nav-item__left">
            <a className="custom-masthead-nav-link" href="http://www.telia.se/fastighetsagare/?teliase_top_fastighetsagare">
              Property owners
            </a>
          </li>

          <li className="custom-masthead-nav-item custom-masthead-nav-item__right">
            <a className="custom-masthead-nav-link" href="http://www.telia.se/foretag/kontakt/telefon?intcmp=kontakt_top_foretag">
              Contact Us
            </a>
          </li>

          <li className="custom-masthead-nav-item custom-masthead-nav-item__right">
            <a className="custom-masthead-nav-link" href="http://support.appdirect.com">
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
