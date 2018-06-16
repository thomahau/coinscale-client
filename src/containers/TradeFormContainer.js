import React from 'react';
import { connect } from 'react-redux';
import TradeForm from '../components/TradeForm';

export class TradeFormContainer extends React.Component {
  render() {
    return (
      <div>
        <h4 className="mb-3">Trade</h4>
        <TradeForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.protectedData.date,
  balance: state.protectedData.balance
});

export default connect(mapStateToProps)(TradeFormContainer);
