import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Col, Row, Card, CardHeader, Nav, NavItem, NavLink } from 'reactstrap';
import PortfolioContainer from './PortfolioContainer';
import TransactionsContainer from './TransactionsContainer';
import TradeContainer from './TradeContainer';

const Dashboard = () => (
  <Container fluid className="px-5 pt-4">
    <Row>
      <Col style={{ border: '1px solid black' }}>
        <Row style={{ height: '80px', border: '1px solid black' }}>Date slider here</Row>
        <Row style={{ height: '600px' }}>
          <Card className="border-dark" style={{ width: '100%' }}>
            <Nav tabs>
              <NavItem>
                <NavLink href="/dashboard/portfolio" active>
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard/transactions">Transactions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard/trade">Trade</NavLink>
              </NavItem>
            </Nav>
            <Switch>
              <Route path="/dashboard/portfolio" component={PortfolioContainer} />
              <Route path="/dashboard/transactions" component={TransactionsContainer} />
              <Route path="/dashboard/trade" component={TradeContainer} />
              <Route path="/dashboard" component={PortfolioContainer} />
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
  <CardHeader />;
