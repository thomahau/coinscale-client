import React from 'react';
import { Link } from 'react-router-dom';
import NavbarElements from './NavbarElements';
import './Headerbar.css';

export default function Headerbar() {
  return (
    <header className="u-full-width" role="banner">
      <nav className="header-container">
        <Link className="u-pull-left" to="/">
          coinscale
        </Link>
        <NavbarElements />
      </nav>
    </header>
  );
}
