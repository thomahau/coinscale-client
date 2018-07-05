import React from 'react';
import './Input.css';

export default class Input extends React.Component {
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <p className="form-help">{this.props.meta.error}</p>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <p className="form-help">{this.props.meta.warning}</p>;
    }

    return (
      <div>
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          readOnly={this.props.readOnly}
          value={this.props.val}
          invalid={error || warning}
          className={this.props.className}
        />
        {error}
        {warning}
      </div>
    );
  }
}
