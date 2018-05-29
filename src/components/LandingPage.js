import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardGroup,
  CardTitle,
  CardText,
  CardBody,
  Container,
  Jumbotron
} from 'reactstrap';
import Registration from './Registration';
// import Footer from './Footer';

const LandingPage = () => (
  <div>
    <Jumbotron className="text-center">
      <Container>
        <h1>Your stepping stone to the cryptocurrency markets</h1>
        <Button color="success" className="my-3">
          Sign up to get started
        </Button>
      </Container>
    </Jumbotron>
    <Container className="text-center">
      <CardGroup>
        <Card className="py-4">
          <CardImg
            top
            style={{
              height: '128px',
              width: '128px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            src={require('../images/money.png')}
            alt="Money icon"
          />
          <CardBody>
            <CardTitle>Risk free investing with virtual cash</CardTitle>
            <CardText>
              Start with $10,000 in virtual cash and put your cryptocurrency investing skills to the
              test.
            </CardText>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardImg
            top
            style={{
              height: '128px',
              width: '128px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            src={require('../images/trade.png')}
            alt="Trade icon"
          />
          <CardBody>
            <CardTitle>Go back in time and place trades</CardTitle>
            <CardText>
              Enter your hypothetical buy and sell orders and see how your coins would have
              performed.
            </CardText>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardImg
            top
            style={{
              height: '128px',
              width: '128px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            src={require('../images/line-chart.png')}
            alt="Chart icon"
          />
          <CardBody>
            <CardTitle>Test your portfolio ideas</CardTitle>
            <CardText>
              Assemble your dream portfolio and track its performance through time.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </Container>
    <Container>
      <Registration />
    </Container>
  </div>
);

export default LandingPage;

// import React from 'react';
// import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

// export function LandingPage(props) {
//   // If user is logged in, redirect straight to dashboard
//   if (props.loggedIn) {
//     <Redirect to="/dashboard" />;
//   }

//   return ()
// }

// const mapStateToProps = state => ({
//   loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
