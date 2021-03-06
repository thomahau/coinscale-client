import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import TradeFormHeader from './TradeFormHeader/TradeFormHeader';
import TradeForm from './TradeForm/TradeForm';
import { resetTransactionSuccess } from '../../../../../actions/transactions';

export class TradeFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }

  componentDidUpdate(prevProps) {
    // Clear form inputs when user selects another coin
    if (prevProps.coinData !== this.props.coinData) {
      this.props.reset('trade');
    }
  }

  onChangeAmount = (value) => {
    const amount = parseFloat(value.amount || 0);
    const price = this.props.coinData ? parseFloat(this.props.coinData.current) : 0;
    this.setState({
      total: (amount * price).toString()
    });
  };

  render() {
    return (
      <div>
        <TradeFormHeader />
        <TradeForm total={this.state.total} onChange={this.onChangeAmount} {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  reset: formName => dispatch(reset(formName)),
  closeAlert: value => dispatch(resetTransactionSuccess(value))
});

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  coinData: state.protectedData.coinToTrade,
  portfolio: state.protectedData.portfolio,
  transactionSuccess: state.protectedData.transactionSuccess
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeFormContainer);
