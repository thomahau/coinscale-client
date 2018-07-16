import React from 'react';
import { connect } from 'react-redux';
import RequiresLogin from './RequiresLogin';
import Dashboard from './Dashboard/Dashboard';
import { fetchPriceData } from '../../actions/coinscale';
import { fetchPortfolio } from '../../actions/portfolio';
import { fetchTransactions } from '../../actions/transactions';

export class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPriceData(this.props.date));
    this.props.dispatch(fetchPortfolio());
    this.props.dispatch(fetchTransactions());
  }

  render() {
    if (this.props.loading) {
      return <div>Loading data...</div>;
    }
    return <Dashboard />;
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  date: state.protectedData.date
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
