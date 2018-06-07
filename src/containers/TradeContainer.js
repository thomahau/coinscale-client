import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export function TradeContainer(props) {
  return (
    <div>
      <h4 className="mb-3">Trade</h4>
      <Form className="mx-5 my-3">
        <FormGroup row>
          <Label for="symbol" sm={2}>
            Symbol
          </Label>
          <Col sm={4}>
            <Input type="text" name="symbol" id="symbol" size="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="type" sm={2}>
            Buy/Sell
          </Label>
          <Col sm={4}>
            <Input type="select" name="type" id="type" size="sm">
              <option>BUY</option>
              <option>SELL</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="quantity" sm={2}>
            Amount
          </Label>
          <Col sm={4}>
            <Input type="number" name="quantity" id="quantity" size="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="date" sm={2}>
            Date
          </Label>
          <Col sm={4}>
            <Input type="date" name="date" id="date" size="sm" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="price" sm={2}>
            Price
          </Label>
          <Col sm={4}>
            <Input plaintext>$0</Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>
            Total cost
          </Label>
          <Col sm={4}>
            <Input plaintext>$0</Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="cost" sm={2}>
            Your balance
          </Label>
          <Col sm={4}>
            <Input plaintext>{props.balance}</Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={{ size: 4, offset: 2 }}>
            <Button color="success" size="sm" style={{ width: '100%' }}>
              Place trade
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  balance: state.balance
});

export default connect(mapStateToProps)(TradeContainer);
