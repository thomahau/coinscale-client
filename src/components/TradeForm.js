import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import { Col, Button, Form, FormGroup, Label, UncontrolledAlert } from 'reactstrap';
import Input from './Input';
import FormInputPlaintext from './FormInputPlaintext';
import { submitTrade } from '../actions/coinscale';
import { required, nonEmpty, validAmount } from '../validators';

export class TradeForm extends React.Component {
  onSubmit(values) {
    values.symbol = this.props.coinData.currency;
    values.date = this.props.date;
    values.price = this.props.coinData.current;
    values.total = this.props.total;
    values.portfolio = this.props.portfolio;

    return this.props.dispatch(submitTrade(values));
  }

  render() {
    let error;
    let success;
    if (this.props.error) {
      error = <UncontrolledAlert color="danger">{this.props.error}</UncontrolledAlert>;
    }
    if (this.props.transactionSuccess) {
      success = (
        <UncontrolledAlert color="success" onClick={event => this.props.closeAlert(null)}>
          Your transaction was successful!
        </UncontrolledAlert>
      );
    }
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
            <Field component={Input} type="select" name="type" validate={[required]}>
              <option disabled />
              <option value="Buy">BUY</option>
              <option value="Sell">SELL</option>
            </Field>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="amount" sm={2}>
            Amount:
          </Label>
          <Col sm={4}>
            <Field
              component={Input}
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
            <Field
              component={FormInputPlaintext}
              type="text"
              name="price"
              val={new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
              }).format(coinPrice)}
            />
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
              val={new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 5
              }).format(this.props.total)}
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
              val={new Intl.NumberFormat('en-EN', {
                style: 'currency',
                currency: 'USD',
                minimumSignificantDigits: 1,
                maximumSignificantDigits: 7
              }).format(this.props.portfolio.balance)}
            />
          </Col>
        </FormGroup>
        {error}
        {success}
        <FormGroup row>
          <Col sm={{ size: 4, offset: 2 }}>
            <Button
              color="success"
              size="sm"
              disabled={!this.props.coinData || this.props.pristine || this.props.submitting}
              block
            >
              Place trade
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default reduxForm({
  form: 'trade',
  onSubmitFail: (errors, dispatch) => dispatch(focus('trade', 'amount')),
  onSubmitSuccess: (result, dispatch) => dispatch(reset('trade'))
})(TradeForm);
