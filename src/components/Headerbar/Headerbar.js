import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav/HeaderNav';
import './Headerbar.css';

export default function Headerbar() {
  return (
    <header className="u-full-width" role="banner">
      <nav className="header-container">
        <Link className="u-pull-left" to="/">
          coinscale
        </Link>
        <HeaderNav />
      </nav>
    </header>
  );
}
