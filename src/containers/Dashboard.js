import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row, Card, CardHeader, Nav, NavItem, NavLink } from 'reactstrap';
import FundsContainer from './FundsContainer';
import HistoryContainer from './HistoryContainer';
import TradeContainer from './TradeContainer';

const Dashboard = () => (
  // TODO: https://reactstrap.github.io/components/tabs/
  <Container fluid className="px-5 pt-4">
    <Row>
      <Col style={{ border: '1px solid black' }}>
        <Row style={{ height: '80px', border: '1px solid black' }}>Date slider here</Row>
        <Row style={{ height: '600px' }}>
          <Card className="border-dark" style={{ width: '100%' }}>
            <Nav tabs>
              <NavItem className="mx-0">
                <NavLink href="/dashboard/funds" active>
                  Funds
                </NavLink>
              </NavItem>
              <NavItem className="mx-0">
                <NavLink href="/dashboard/history">History</NavLink>
              </NavItem>
              <NavItem className="mx-0">
                <NavLink href="/dashboard/trade">Trade</NavLink>
              </NavItem>
            </Nav>
            <Switch>
              <Route path="/dashboard/funds" component={FundsContainer} />
              <Route path="/dashboard/history" component={HistoryContainer} />
              <Route path="/dashboard/trade" component={TradeContainer} />
              <Route exact path="/dashboard" component={FundsContainer} />
            </Switch>
          </Card>
        </Row>
      </Col>
      <Col sm="4" style={{ border: '1px solid black' }}>
        <h3>Coins</h3>
        Coins table
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
