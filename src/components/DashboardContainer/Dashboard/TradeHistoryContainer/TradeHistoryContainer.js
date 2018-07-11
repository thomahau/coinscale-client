import React from 'react';
import { connect } from 'react-redux';
import TradeHistoryHeader from './TradeHistoryHeader/TradeHistoryHeader';
import TradeHistory from './TradeHistory/TradeHistory';

export class TradeHistoryContainer extends React.Component {
  render() {
    return (
      <div>
        <TradeHistoryHeader />
        <TradeHistory {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.protectedData.transactions
});

export default connect(mapStateToProps)(TradeHistoryContainer);
