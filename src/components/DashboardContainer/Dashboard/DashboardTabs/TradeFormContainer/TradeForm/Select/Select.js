import React from 'react';
import './Select.css';

export default function Select(props) {
  const optionElements = props.options.map(option =>
    (option === '' ? (
      <option key={option} disabled>
        {option}
      </option>
    ) : (
      <option key={option} value={option}>
        {option}
      </option>
    )));

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
      <select {...props.input} id={props.input.name} type={props.type}>
        {optionElements}
      </select>
      {error}
      {warning}
    </div>
  );
}
