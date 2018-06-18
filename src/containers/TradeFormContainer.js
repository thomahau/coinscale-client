import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import TradeForm from '../components/TradeForm';

export class TradeFormContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      total: 0
    };
  }

  componentWillReceiveProps() {
    this.props.reset('trade');
  }

  onChangeAmount = (value) => {
    const amount = parseFloat(value.amount || 0);
    const price = this.props.coinToTrade ? parseFloat(this.props.coinToTrade.current) : 0;
    this.setState({
      total: (amount * price).toString()
    });
  };

  render() {
    return (
      <div>
        <h4 className="mb-3">Trade</h4>
        <TradeForm
          date={this.props.date}
          coinData={this.props.coinToTrade}
          total={this.state.total}
          onChange={this.onChangeAmount}
          balance={this.props.balance}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  reset: formName => dispatch(reset(formName))
});

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  coinToTrade: state.protectedData.coinToTrade,
  balance: state.protectedData.balance
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeFormContainer);
