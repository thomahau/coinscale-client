import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { getHoldingsData, getAggregateData } from '../helpers';

export function FundsContainer(props) {
  const { data, portfolio, transactions } = props;
  const holdingsData = getHoldingsData(data, portfolio, transactions);
  const aggregateData = getAggregateData(holdingsData);
  const holdingsDataRows = holdingsData.map(holding => (
    <tr>
      <td>{holding.currency}</td>
      <td>{holding.amount}</td>
      <td>${holding.costBasis}</td>
      <td>${holding.currentValue}</td>
      <td>${holding.currentValue - holding.costBasis}</td>
      <td>${holding.currentPrice}</td>
      <td>${holding.wPerformance}</td>
    </tr>
  ));

  return (
    <div>
      <h4 className="mb-4">Funds</h4>
      <Table responsive bordered className="mt-3">
        <thead className="thead-light">
          <tr>
            <th>Cost basis</th>
            <th>Current value</th>
            <th>Profit/Loss</th>
            <th>7d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${aggregateData.costBasis}</td>
            <td>${aggregateData.currentValue}</td>
            <td>${aggregateData.currentValue - aggregateData.costBasis}</td>
            <td>${aggregateData.wPerformance}</td>
          </tr>
        </tbody>
      </Table>

      <Table responsive bordered className="mt-3">
        <thead className="thead-light">
          <tr>
            <th>Symbol</th>
            <th>Amount</th>
            <th>Cost basis</th>
            <th>Current value</th>
            <th>Profit/Loss</th>
            <th>Current price</th>
            <th>7d</th>
          </tr>
        </thead>
        <tbody>{holdingsDataRows}</tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  balance: state.balance,
  portfolio: state.portfolio,
  transactions: state.transactions
});

export default connect(mapStateToProps)(FundsContainer);
