import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Container, Col, Row, Card, CardHeader, CardBody, Nav, NavItem } from 'reactstrap';
import DateWidget from '../components/DateWidget';
import Filter from '../components/Filter';
import FundsContainer from './FundsContainer';
import HistoryContainer from './HistoryContainer';
import TradeContainer from './TradeContainer';
import CoinsTableContainer from './CoinsTableContainer';

const Dashboard = () => (
  // POSSIBLE TODO: https://reactstrap.github.io/components/tabs/
  <Container fluid className="px-4 pt-4">
    <Row>
      <Col>
        <Row style={{ minHeight: '90px' }} className="mr-lg-1 mb-lg-3">
          <Card className="border-dark" style={{ width: '100%' }}>
            <CardHeader>
              <h6>Select date</h6>
            </CardHeader>
            <CardBody>
              <DateWidget />
            </CardBody>
          </Card>
        </Row>
        <Row style={{ minHeight: '600px' }} className="mr-lg-1">
          <Card className="border-dark" style={{ width: '100%' }}>
            <CardHeader>
              <Nav justified>
                <NavItem className="view-option">
                  <NavLink to="/dashboard/funds" activeClassName="active">
                    Funds
                  </NavLink>
                </NavItem>
                <NavItem className="view-option">
                  <NavLink to="/dashboard/history" activeClassName="active">
                    History
                  </NavLink>
                </NavItem>
                <NavItem className="view-option">
                  <NavLink to="/dashboard/trade" activeClassName="active">
                    Trade
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <Switch>
                <Route path="/dashboard/funds" component={FundsContainer} />
                <Route path="/dashboard/history" component={HistoryContainer} />
                <Route path="/dashboard/trade" component={TradeContainer} />
                <Route exact path="/dashboard" component={FundsContainer} />
              </Switch>
            </CardBody>
          </Card>
        </Row>
      </Col>
      <Col lg="5" className="px-0">
        <Card className="border-dark" style={{ height: '100%', width: '100%' }}>
          <CardHeader>
            <h6>Cryptocurrencies</h6>
          </CardHeader>
          <CardBody>
            <Filter />
            <CoinsTableContainer />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
