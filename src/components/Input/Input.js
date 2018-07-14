import React from 'react';
import './Input.css';

export default function Input(props) {
  let error;
  if (props.meta.touched && props.meta.error) {
    error = <p className="form-help">{props.meta.error}</p>;
  }

  let warning;
  if (props.meta.touched && props.meta.warning) {
    warning = <p className="form-help">{props.meta.warning}</p>;
  }

  return (
    <div>
      <input
        {...props.input}
        id={props.input.name}
        type={props.type}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        value={props.val}
        className={props.className}
      />
      {error}
      {warning}
    </div>
  );
}
