import React from 'react';
import { Link } from 'react-router-dom';
import NavbarElements from './NavbarElements';
import './Headerbar.css';

export default function Headerbar() {
  return (
    <nav className="u-full-width" role="banner">
      <Link className="u-pull-left" to="/">
        coinscale
      </Link>
      <NavbarElements />
    </nav>
  );
}
