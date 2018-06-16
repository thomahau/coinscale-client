import React from 'react';
import { connect } from 'react-redux';
import CoinsTable from '../components/CoinsTable';
import { fetchPriceData, setTradeCoin } from '../actions/coinscale';

export class CoinsTableContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPriceData(this.props.date);
  }

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
    dispatch(setTradeCoin(symbol));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsTableContainer);
