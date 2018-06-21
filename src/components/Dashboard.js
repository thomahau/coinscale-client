import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Container, Col, Row, Card, CardHeader, CardBody, Nav, NavItem } from 'reactstrap';
import RequiresLogin from '../containers/RequiresLogin';
import DateWidgetContainer from '../containers/DateWidgetContainer';
import CoinsTableContainer from '../containers/CoinsTableContainer';
import FundsContainer from '../containers/FundsContainer';
import TradeHistoryContainer from '../containers/TradeHistoryContainer';
import TradeFormContainer from '../containers/TradeFormContainer';
import { fetchPriceData } from '../actions/coinscale';
import { fetchPortfolio } from '../actions/portfolio';
import { fetchTransactions } from '../actions/transactions';

export default function Dashboard() {
  return (
    <Container fluid className="px-4 pt-4 mb-1">
      <Row>
        <Col>
          <Row className="mr-lg-1 mb-lg-3">
            <Card className="border-dark w-100">
              <CardHeader>
                <h6>Select date</h6>
              </CardHeader>
              <CardBody>
                <DateWidgetContainer />
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
                  <Route exact path="/dashboard/history" component={TradeHistoryContainer} />
                  <Route exact path="/dashboard/trade" component={TradeFormContainer} />
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
              <CoinsTableContainer />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// export class Dashboard extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(fetchPriceData(this.props.date));
//     this.props.dispatch(fetchPortfolio());
//     this.props.dispatch(fetchTransactions());
//   }

//   render() {
//     if (this.props.fetching) {
//       return (
//         <Container fluid className="px-4 pt-4 mb-1">
//           <p>Loading data...</p>
//         </Container>
//       );
//     }
//     return (
//       <Container fluid className="px-4 pt-4 mb-1">
//         <Row>
//           <Col>
//             <Row className="mr-lg-1 mb-lg-3">
//               <Card className="border-dark w-100">
//                 <CardHeader>
//                   <h6>Select date</h6>
//                 </CardHeader>
//                 <CardBody>
//                   <DateWidgetContainer />
//                 </CardBody>
//               </Card>
//             </Row>
//             <Row className="main-dashboard-container mr-lg-1">
//               <Card className="border-dark w-100">
//                 <CardHeader>
//                   <Nav justified>
//                     <NavItem className="view-option">
//                       <NavLink to="/dashboard/funds" activeClassName="active">
//                         Funds
//                       </NavLink>
//                     </NavItem>
//                     <NavItem className="view-option">
//                       <NavLink to="/dashboard/history" activeClassName="active">
//                         History
//                       </NavLink>
//                     </NavItem>
//                     <NavItem className="view-option">
//                       <NavLink to="/dashboard/trade" activeClassName="active">
//                         Trade
//                       </NavLink>
//                     </NavItem>
//                   </Nav>
//                 </CardHeader>
//                 <CardBody>
//                   <Switch>
//                     <Route exact path="/dashboard/funds" component={FundsContainer} />
//                     <Route exact path="/dashboard/history" component={TradeHistoryContainer} />
//                     <Route exact path="/dashboard/trade" component={TradeFormContainer} />
//                     <Route exact path="/dashboard" component={FundsContainer} />
//                   </Switch>
//                 </CardBody>
//               </Card>
//             </Row>
//           </Col>
//           <Col lg="5" className="px-0">
//             <Card className="border-dark w-100 h-100">
//               <CardHeader>
//                 <h6>Cryptocurrencies</h6>
//               </CardHeader>
//               <CardBody>
//                 <CoinsTableContainer />
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   date: state.protectedData.date,
//   fetching: state.protectedData.fetching
//   // protectedData: state.protectedData.data
// });

// export default RequiresLogin()(connect(mapStateToProps)(Dashboard));
