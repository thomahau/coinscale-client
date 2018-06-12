import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { round } from '../helpers';
import Filter from '../components/Filter';

export function HistoryContainer(props) {
  // const transactionRows = props.transactions.map(transaction => (
  //   <tr>
  //     <td>{transaction.timestamp}</td>
  //     <td>{transaction.currency}</td>
  //     <td>{transaction.type}</td>
  //     <td>${round(transaction.price)}</td>
  //     <td>{transaction.amount}</td>
  //     <td>${round(transaction.price * transaction.amount)}</td>
  //   </tr>
  // ));

  return (
    <div>
      <h4 className="mb-4">Trade History</h4>
      <Filter />
      <Table responsive bordered className="mt-3">
        <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Symbol</th>
            <th>Type</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        {/* {transactionRows} */}
        <tbody />
      </Table>
    </div>
  );
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(HistoryContainer);
