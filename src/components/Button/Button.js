import React from 'react';
import './Button.css';

// Reusable component for different buttons
export default function Button(props) {
  const {
    primary, block, nav, login, logout, onClick, children
  } = props;
  const primaryClass = primary ? 'button-primary' : '';
  const blockClass = block ? 'u-full-width' : '';
  const navClass = nav ? 'button-nav' : '';
  const loginClass = login ? 'button-login' : '';
  const logoutClass = logout ? 'button-logout' : '';

  return (
    <button
      onClick={onClick}
      className={`button ${primaryClass} ${blockClass} ${navClass} ${loginClass} ${logoutClass}`}
    >
      {children}
    </button>
  );
}
