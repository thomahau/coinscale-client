import React from 'react';

export default function FormInputPlaintext(props) {
  return (
    <input
      {...props.input}
      id={props.input.name}
      type={props.type}
      value={props.val}
      readOnly
      className="form-control-plaintext"
    />
  );
}
