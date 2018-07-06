import React from 'react';
import { reduxForm, Field, focus, reset } from 'redux-form';
import Alert from './Alert/Alert';
import Input from '../../../../Input/Input';
import Select from './Select/Select';
import Button from '../../../../Button/Button';
import { submitTrade } from '../../../../../actions/coinscale';
import { required, nonEmpty, validAmount } from '../../../../../validators';
import './TradeForm.css';

const tradeTypeOptions = ['', 'Buy', 'Sell'];

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
      error = <Alert type="error">{this.props.error}</Alert>;
    }
    if (this.props.transactionSuccess) {
      success = (
        <Alert type="success" onClick={event => this.props.closeAlert(null)}>
          Your transaction was successful!
        </Alert>
      );
    }
    const coinSymbol = this.props.coinData ? this.props.coinData.currency : '';
    const coinName = this.props.coinData
      ? `${this.props.coinData.name} (${this.props.coinData.currency})`
      : 'No coin selected';
    const coinPrice = this.props.coinData ? this.props.coinData.current : '0';

    return (
      <form
        className="trade-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="symbol">Cryptocurrency:</label>
        <Field component={Input} type="text" name="symbol" readOnly val={coinName} />
        <label htmlFor="type">Buy / Sell:</label>
        <Field component={Select} name="type" options={tradeTypeOptions} validate={[required]} />
        <label htmlFor="amount">Amount:</label>
        <div className="amount-box">
          <Field
            component={Input}
            type="number"
            name="amount"
            onChange={event => this.props.onChange(event.target.value)}
            validate={[required, nonEmpty]}
            normalize={validAmount}
          />
          <span className="amount-symbol">{coinSymbol}</span>
        </div>
        <label htmlFor="date">Current date:</label>
        <Field
          component={Input}
          type="text"
          name="date"
          readOnly
          val={this.props.date}
          className="monospace"
        />
        <label htmlFor="price">Current price:</label>
        <Field
          component={Input}
          type="text"
          name="price"
          readOnly
          className="monospace"
          val={new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 5
          }).format(coinPrice)}
        />
        <label htmlFor="total">Transaction total:</label>
        <Field
          component={Input}
          type="text"
          name="total"
          readOnly
          className="monospace"
          val={new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 5
          }).format(this.props.total)}
        />
        <label htmlFor="balance">Your balance:</label>
        <Field
          component={Input}
          type="text"
          name="balance"
          readOnly
          className="monospace"
          val={new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 7
          }).format(this.props.portfolio.balance)}
        />
        {error}
        {success}
        <Button primary block>
          Place trade
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'trade',
  onSubmitFail: (errors, dispatch) => dispatch(focus('trade', 'amount')),
  onSubmitSuccess: (result, dispatch) => dispatch(reset('trade'))
})(TradeForm);
