import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
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

export function LandingPage(props) {
  // If user is logged in, redirect straight to dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard/funds" />;
  }

  return (
    <div>
      <Jumbotron className="text-center">
        <Container>
          <h1>Your stepping stone to the cryptocurrency markets</h1>
          <Button color="success" className="my-4" disabled>
            Sign up to get started
          </Button>
          <br />
          <Link to="/dashboard/funds">See dashboard (demo)</Link>
        </Container>
      </Jumbotron>
      <Container className="text-center">
        <CardGroup className="my-6">
          <Card className="py-lg-5 feature-card">
            <CardImg top src={require('../images/money-g.png')} alt="Money icon" />
            <CardBody>
              <CardTitle>Risk free investing with virtual cash</CardTitle>
              <CardText>
                Start with $20,000 in virtual cash and put your cryptocurrency investing skills to
                the test.
              </CardText>
            </CardBody>
          </Card>
          <Card className="py-lg-5 feature-card">
            <CardImg top src={require('../images/trade-g.png')} alt="Trade icon" />
            <CardBody>
              <CardTitle>Go back in time and place trades</CardTitle>
              <CardText>
                Enter your hypothetical buy and sell orders and see how your coins would have
                performed.
              </CardText>
            </CardBody>
          </Card>
          <Card className="py-lg-5 feature-card">
            <CardImg top src={require('../images/line-chart-g.png')} alt="Chart icon" />
            <CardBody>
              <CardTitle>Test your portfolio ideas</CardTitle>
              <CardText>
                Assemble your dream portfolio and track its performance through time.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
      <Container className="pt-lg-3">
        <Registration />
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
