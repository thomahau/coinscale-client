import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="u-full-width">
      <a
        href="https://github.com/thomahau/coinscale-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="github-icon"
          src={require('../../../images/github.png')}
          alt="Github icon"
        />
      </a>
    </footer>
  );
}
