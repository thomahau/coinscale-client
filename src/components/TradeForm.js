import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import FormInput from './FormInput';
import FormInputPlaintext from './FormInputPlaintext';
// import { [TRADEFUNCTION] } from '../actions/coinscale';
import { required, nonEmpty, validAmount } from '../validators';

export class TradeForm extends React.Component {
  onSubmit(values) {
    values.currency = this.props.coinData.currency || '';
    values.date = this.props.date;
    values.price = this.props.coinData.current || '';
    values.total = this.props.total;
    console.log(values);
    // return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    // let error;
    // if (this.props.error) {
    //   error = (
    //     <FormGroup aria-live="polite">
    //       <p className="text-danger">{this.props.error}</p>
    //     </FormGroup>
    //   );
    // }
    const coinName = this.props.coinData
      ? `${this.props.coinData.name} (${this.props.coinData.currency})`
      : 'No coin selected';
    const coinPrice = this.props.coinData ? this.props.coinData.current : '0';

    return (
      <Form
        className="trade-form mx-2 my-3"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <FormGroup row>
          <Label for="symbol" sm={2}>
            Cryptocurrency:
          </Label>
          <Col sm={4}>
            <Field component={FormInputPlaintext} type="text" name="symbol" val={coinName} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="type" sm={2}>
            Buy / Sell:
          </Label>
          <Col sm={4}>
            <Field component={FormInput} type="select" name="type" validate={[required]}>
              <option disabled />
              <option>BUY</option>
              <option>SELL</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="amount" sm={2}>
            Amount:
          </Label>
          <Col sm={4}>
            <Field
              component={FormInput}
              type="number"
              name="amount"
              onChange={event => this.props.onChange(event.target.value)}
              validate={[required, nonEmpty]}
              normalize={validAmount}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="date" sm={2}>
            Date:
          </Label>
          <Col sm={4}>
            <Field component={FormInputPlaintext} type="text" name="date" val={this.props.date} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Price:
          </Label>
          <Col sm={4}>
            <Field component={FormInputPlaintext} type="text" name="price" val={`$${coinPrice}`} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="total" sm={2}>
            Total:
          </Label>
          <Col sm={4}>
            <Field
              component={FormInputPlaintext}
              type="text"
              name="total"
              val={`$${this.props.total}`}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="balance" sm={2}>
            Your balance:
          </Label>
          <Col sm={4}>
            <Field
              component={FormInputPlaintext}
              type="text"
              name="balance"
              val={`$${this.props.balance}`}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 4, offset: 2 }}>
            <Button color="success" size="sm" block>
              Place trade
            </Button>
          </Col>
        </FormGroup>
        <FormGroup style={{ display: 'none' }} />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'trade',
  onSubmitFail: (errors, dispatch) => dispatch(focus('trade', 'amount'))
})(TradeForm);