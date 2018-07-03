import React from 'react';

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
      <div className="form-input">
        <input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          invalid={error || warning}
          className={this.props.className}
        >
          {this.props.children}
        </input>
        {error}
        {warning}
      </div>
    );
  }
}
