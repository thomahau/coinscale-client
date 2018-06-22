import React from 'react';
import { connect } from 'react-redux';
import AggregateDataTable from '../components/AggregateDataTable';
import HoldingsTable from '../components/HoldingsTable';
import { tradeCoin } from '../actions/coinscale';
import { getHoldingsData, getAggregateData } from '../actions/utils';
// import { fetchPortfolio } from '../actions/portfolio';
// componentDidMount() {
//   this.props.dispatch(fetchPortfolio());
// }

export class FundsContainer extends React.Component {
  render() {
    const {
      date, priceData, transactions, balance
    } = this.props;
    const holdingsData = getHoldingsData(date, priceData, transactions);
    const aggregateData = getAggregateData(holdingsData, balance);

    if (this.props.fetching) {
      return <p>Loading data...</p>;
    }

    return (
      <div>
        <h4 className="mb-4">Funds</h4>
        <AggregateDataTable data={aggregateData} />
        <HoldingsTable data={holdingsData} tradeCoin={this.props.tradeCoin} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  transactions: state.protectedData.transactions,
  balance: state.protectedData.portfolio.balance,
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
