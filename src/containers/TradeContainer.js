import React from 'react';
import { Col, Button, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

const TradeContainer = () => (
  <Form className="mx-5 my-3">
    <FormGroup row>
      <Label for="symbol" sm={2}>
        Symbol
      </Label>
      <Col sm={4}>
        <Input type="text" name="symbol" id="symbol" placeholder="BTC" size="sm" />
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
        Quantity
      </Label>
      <Col sm={4}>
        <Input type="number" name="quantity" id="quantity" placeholder="1" size="sm" />
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
        <FormText className="mt-2">$1017.20</FormText>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="cost" sm={2}>
        Total cost
      </Label>
      <Col sm={4}>
        <FormText className="mt-2">$1,017.20</FormText>
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
);

export default TradeContainer;
