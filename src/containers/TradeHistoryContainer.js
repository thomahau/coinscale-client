import React from 'react';
import { connect } from 'react-redux';
import TradeHistory from '../components/TradeHistory';

export class TradeHistoryContainer extends React.Component {
  render() {
    return <TradeHistory {...this.props} />;
  }
}

const mapStateToProps = state => ({
  transactions: state.protectedData.transactions
});

export default connect(mapStateToProps)(TradeHistoryContainer);
