import React from 'react';
import { connect } from 'react-redux';
import CoinsTableHeader from './CoinsTableHeader/CoinsTableHeader';
import CoinsTable from './CoinsTable/CoinsTable';
import { fetchPriceData, tradeCoin, setTabIndex } from '../../../../actions/coinscale';

export class CoinsTableContainer extends React.Component {
  render() {
    return (
      <div>
        <CoinsTableHeader />
        <CoinsTable {...this.props} />
      </div>
    );
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
    dispatch(setTabIndex(0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinsTableContainer);
