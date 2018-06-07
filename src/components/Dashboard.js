import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Container, Col, Row, Card, CardHeader, CardBody, Nav, NavItem } from 'reactstrap';
import DateWidget from './DateWidget';
import Filter from './Filter';
import FundsContainer from '../containers/FundsContainer';
import HistoryContainer from '../containers/HistoryContainer';
import TradeContainer from '../containers/TradeContainer';
import CoinsTable from './CoinsTable';

const Dashboard = () => (
  <Container fluid className="px-4 pt-4">
    <Row>
      <Col>
        <Row className="mr-lg-1 mb-lg-3">
          <Card className="border-dark w-100">
            <CardHeader>
              <h6>Select date</h6>
            </CardHeader>
            <CardBody>
              <DateWidget />
            </CardBody>
          </Card>
        </Row>
        <Row className="main-dashboard-container mr-lg-1">
          <Card className="border-dark w-100">
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
                <Route exact path="/dashboard/funds" component={FundsContainer} />
                <Route exact path="/dashboard/history" component={HistoryContainer} />
                <Route exact path="/dashboard/trade" component={TradeContainer} />
                <Route exact path="/dashboard" component={FundsContainer} />
              </Switch>
            </CardBody>
          </Card>
        </Row>
      </Col>
      <Col lg="5" className="px-0">
        <Card className="border-dark w-100 h-100">
          <CardHeader>
            <h6>Cryptocurrencies</h6>
          </CardHeader>
          <CardBody>
            <Filter />
            <CoinsTable />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
