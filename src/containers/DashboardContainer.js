import React from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './/RequiresLogin';
import Dashboard from '../components/Dashboard';
import { fetchPriceData } from '../actions/coinscale';
import { fetchPortfolio } from '../actions/portfolio';
import { fetchTransactions } from '../actions/transactions';

export class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPriceData(this.props.date));
    this.props.dispatch(fetchPortfolio());
    this.props.dispatch(fetchTransactions());
  }

  render() {
    // if (this.props.fetching) {
    //   return <div>Loading data...</div>;
    // }

    return <Dashboard />;
  }
}

const mapStateToProps = state => ({
  date: state.protectedData.date,
  fetching: state.protectedData.fetching
});

const mapDispatchToProps = dispatch => ({
  fetchPriceData: date => dispatch(fetchPriceData(date)),
  fetchPortfolio: () => dispatch(fetchPortfolio()),
  fetchTransactions: () => dispatch(fetchTransactions())
});

export default RequiresLogin()(connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer));
