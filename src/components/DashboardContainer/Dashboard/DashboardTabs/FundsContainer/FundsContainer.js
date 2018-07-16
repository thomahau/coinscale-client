import React from 'react';
import { connect } from 'react-redux';
import FundsHeader from './FundsHeader/FundsHeader';
import AggregateDataTable from './AggregateDataTable/AggregateDataTable';
import HoldingsTable from './HoldingsTable/HoldingsTable';
import { tradeCoin, setTabIndex } from '../../../../../actions/coinscale';
import { getHoldingsData, getAggregateData } from '../../../../../actions/utils';

export class FundsContainer extends React.Component {
  render() {
    if (this.props.fetching) {
      return <p>Loading data...</p>;
    }

    const {
      date, priceData, transactions, balance
    } = this.props;
    const holdingsData = getHoldingsData(date, priceData, transactions);
    const aggregateData = getAggregateData(holdingsData, balance);

    return (
      <div>
        <FundsHeader />
        <AggregateDataTable data={aggregateData} />
        <HoldingsTable data={holdingsData} tradeCoin={this.props.tradeCoin} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.protectedData.fetching,
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  transactions: state.protectedData.transactions,
  balance: state.protectedData.portfolio.balance
});

const mapDispatchToProps = dispatch => ({
  tradeCoin: (symbol) => {
    dispatch(tradeCoin(symbol));
    dispatch(setTabIndex(0));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundsContainer);
