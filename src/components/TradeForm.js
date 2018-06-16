import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FormInput from './FormInput';
// import { [TRADEFUNCTION] } from '../actions/coinscale';
import { required, nonEmpty } from '../validators';

export class TradeForm extends React.Component {
  // onSubmit(values) {
  //     return this.props.dispatch(login(values.username, values.password));
  // }

  render() {
    // let error;
    // if (this.props.error) {
    //   error = (
    //     <FormGroup aria-live="polite">
    //       <p className="text-danger">{this.props.error}</p>
    //     </FormGroup>
    //   );
    // }

    return (
      <Form className="mx-3 my-3">
        <Row>
          <Col sm={2}>Cryptocurrency</Col>
          <Col sm={4}>
            <p>Bitcoin (BTC)</p>
          </Col>
        </Row>
        <FormGroup row>
          <Label for="type" sm={2}>
            Buy / Sell
          </Label>
          <Col sm={4}>
            <Input type="select" name="type" id="type" bsSize="sm">
              <option>BUY</option>
              <option>SELL</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="amount" sm={2}>
            Amount
          </Label>
          <Col sm={4}>
            <Input type="number" name="amount" id="amount" bsSize="sm" min={0} />
          </Col>
        </FormGroup>
        <Row>
          <Col sm={2}>Date</Col>
          <Col sm={4}>
            <p>{this.props.date}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>Price</Col>
          <Col sm={4}>
            <p>$0</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>Total cost</Col>
          <Col sm={4}>
            <p>$0</p>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>Your balance</Col>
          <Col sm={4}>
            <p>${this.props.balance}</p>
          </Col>
        </Row>
        <FormGroup row>
          <Col sm={{ size: 4, offset: 2 }}>
            <Button color="success" size="sm" block>
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
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(TradeForm);

// export default function TradeForm(props) {
//   return (
//     <Form className="mx-3 my-3">
//       <FormGroup row>
//         <Label for="symbol" sm={2}>
//           Symbol
//         </Label>
//         <Col sm={5}>
//           <Input type="text" name="symbol" id="symbol" bsSize="sm" />
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="type" sm={2}>
//           Buy / Sell
//         </Label>
//         <Col sm={5}>
//           <Input type="select" name="type" id="type" bsSize="sm">
//             <option>BUY</option>
//             <option>SELL</option>
//           </Input>
//         </Col>
//       </FormGroup>
//       <FormGroup row>
//         <Label for="amount" sm={2}>
//           Amount
//         </Label>
//         <Col sm={5}>
//           <Input type="number" name="amount" id="amount" bsSize="sm" min={0} />
//         </Col>
//       </FormGroup>
//       <Row>
//         <Col sm={2}>Date</Col>
//         <Col sm={5}>
//           <p>{props.date}</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={2}>Price</Col>
//         <Col sm={5}>
//           <p>$0</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={2}>Total cost</Col>
//         <Col sm={5}>
//           <p>$0</p>
//         </Col>
//       </Row>
//       <Row>
//         <Col sm={2}>Your balance</Col>
//         <Col sm={5}>
//           <p>${props.balance}</p>
//         </Col>
//       </Row>
//       <FormGroup row>
//         <Col sm={{ size: 5, offset: 2 }}>
//           <Button color="success" size="sm" block>
//             Place trade
//           </Button>
//         </Col>
//       </FormGroup>
//     </Form>
//   );
// }
