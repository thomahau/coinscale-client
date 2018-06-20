import React from 'react';
import { connect } from 'react-redux';
import TradeHistory from '../components/TradeHistory';
import { fetchTransactions } from '../actions/transactions';

export class TradeHistoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return <TradeHistory {...this.props} />;
  }
}

const mapStateToProps = state => ({
  transactions: state.protectedData.transactions
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeHistoryContainer);
