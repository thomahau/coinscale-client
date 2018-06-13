import React from 'react';
import { Input, FormFeedback } from 'reactstrap';

export default class FormInput extends React.Component {
  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <FormFeedback invalid>{this.props.meta.error}</FormFeedback>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <FormFeedback invalid>{this.props.meta.warning}</FormFeedback>;
    }

    return (
      <div className="form-input">
        <Input
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          bsSize="sm"
          invalid={error || warning}
        />
        {error}
        {warning}
      </div>
    );
  }
}
