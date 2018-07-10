import React from 'react';
import './Alert.css';

export default function Alert(props) {
  const { type, onClick, children } = props;
  const typeClass = `alert-${type}`;
  const button = onClick ? (
    <button className="close" aria-label="Close" onClick={onClick}>
      <span aria-hidden="true">×</span>
    </button>
  ) : (
    ''
  );

  return (
    <div className={`alert ${typeClass}`}>
      {button}
      {children}
    </div>
  );
}
