import React from 'react';
import { connect } from 'react-redux';
import Funds from '../components/Funds';
import { tradeCoin } from '../actions/coinscale';
// import { fetchPortfolio } from '../actions/portfolio';

export class FundsContainer extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchPortfolio());
  }

  render() {
    return <Funds {...this.props} />;
  }
}

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  transactions: state.protectedData.transactions,
  portfolio: state.protectedData.portfolio,
  fetching: state.protectedData.fetching
});

const mapDispatchToProps = dispatch => ({
  tradeCoin: (symbol) => {
    dispatch(tradeCoin(symbol));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundsContainer);
