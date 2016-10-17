import React from 'react';
import {Link} from './../common';

export const PrimaryHeaderNavigation = ({children}) => {
  return (
    <header className="custom-header">
      {children}
    </header>
  );
};

export const PrimaryNavigation = ({children}) => {
  return (
    <div className="custom-primary">
      <nav className="custom-primary-nav">
        <ul className="custom-primary-nav-items adb-layout-default">
          {children}
        </ul>
      </nav>
    </div>
  );
};

export const LogoLink = ({text}) => {
  return (<a className="custom-logo-link" href="/">
    <h1>{text}</h1>
  </a>)
}

export const MarketplaceHeaderLink = () => {
  return (<li className="custom-primary-nav-item custom-primary-nav-item">
    <Link href="/home">Marketplace</Link>
  </li>)
}

export const LoginHeaderLink = () => {
  return (<li className="custom-primary-nav-item custom-primary-nav-item">
    <Link href="/login">Marketplace</Link>
  </li>)
}
