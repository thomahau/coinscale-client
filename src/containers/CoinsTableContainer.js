import React from 'react';
import { connect } from 'react-redux';
import CoinsTable from '../components/CoinsTable';
import { fetchPriceData, tradeCoin } from '../actions/coinscale';

export class CoinsTableContainer extends React.Component {
  render() {
    return <CoinsTable {...this.props} />;
  }
}

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData
});

const mapDispatchToProps = dispatch => ({
  fetchPriceData: (date) => {
    dispatch(fetchPriceData(date));
  },
  tradeCoin: (symbol) => {
    dispatch(tradeCoin(symbol));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsTableContainer);
