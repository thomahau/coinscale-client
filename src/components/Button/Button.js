import React from 'react';
import './Button.css';

export default function Button(props) {
  const {
    primary, block, nav, login, onClick, children
  } = props;
  const primaryClass = primary ? 'button-primary' : '';
  const blockClass = block ? 'u-full-width' : '';
  const navClass = nav ? 'button-nav' : '';
  const loginClass = login ? 'button-login' : '';

  return (
    <button
      onClick={onClick}
      className={`button ${primaryClass} ${blockClass} ${navClass} ${loginClass}`}
    >
      {children}
    </button>
  );
}
