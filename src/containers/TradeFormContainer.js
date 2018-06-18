import React from 'react';
import { connect } from 'react-redux';
import TradeForm from '../components/TradeForm';

export class TradeFormContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      total: 0
    };
  }

  onChangeAmount = (value) => {
    const amount = parseFloat(value.amount || 0);
    const price = parseFloat(this.props.coinToTrade.current);
    this.setState({
      total: (amount * price).toString()
    });
  };

  render() {
    // const coinData = this.props.priceData.filter(priceDatum => priceDatum.currency === this.props.coinToTrade)[0];

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

const mapStateToProps = state => ({
  date: state.protectedData.date,
  priceData: state.protectedData.priceData,
  coinToTrade: state.protectedData.coinToTrade,
  balance: state.protectedData.balance
});

export default connect(mapStateToProps)(TradeFormContainer);
