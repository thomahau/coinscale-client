import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col, Button, Form, FormGroup, Label } from 'reactstrap';
import FormInput from './FormInput';
import FormInputPlaintext from './FormInputPlaintext';
// import { [TRADEFUNCTION] } from '../actions/coinscale';
import { required, nonEmpty, validAmount } from '../validators';

export class TradeForm extends React.Component {
  onSubmit(values) {
    // values.symbol = this.props.symbol;
    // values.date = this.props.date;
    // values.price = this.props.price;
    // values.total = this.props.total;
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
    const coinName =
      this.props.coinToTrade.symbol !== ''
        ? `${this.props.coinToTrade.name} (${this.props.coinToTrade.symbol})`
        : '';
    const coinPrice = this.props.coinToTrade.price !== '' ? this.props.coinToTrade.price : '0';
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
            <Field component={FormInput} type="select" name="type">
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
            <Field component={FormInputPlaintext} type="text" name="price" val={coinPrice} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="total" sm={2}>
            Total cost:
          </Label>
          <Col sm={4}>
            <Field component={FormInputPlaintext} type="text" name="total" val="$0" />
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
              val={this.props.balance}
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
