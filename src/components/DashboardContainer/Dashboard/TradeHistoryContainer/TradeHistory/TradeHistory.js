import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function TradeHistory(props) {
  const data = props.transactions.map(transaction => ({
    date: transaction.date,
    type: transaction.type,
    symbol: transaction.symbol,
    price: transaction.price,
    amount: transaction.amount,
    total: transaction.price * transaction.amount
  }));
  const columns = [
    {
      Header: 'Date',
      accessor: 'date',
      Cell: props => <span className="monospace">{props.value}</span>
    },
    { Header: 'Symbol', accessor: 'symbol' },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: row => <span style={{ color: row.value === 'Buy' ? 'green' : 'red' }}>{row.value}</span>
    },
    {
      Header: 'Price',
      accessor: 'price',
      Cell: row => (
        <span className="monospace">
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 4
          }).format(row.value)}
        </span>
      )
    },
    {
      Header: 'Amount',
      accessor: 'amount',
      Cell: props => <span className="monospace">{props.value}</span>
    },
    {
      Header: 'Total',
      accessor: 'total',
      Cell: row => (
        <span className="monospace">
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 4
          }).format(row.value)}
        </span>
      )
    }
  ];

  return (
    <div>
      <h3>Trade History</h3>
      <ReactTable data={data} columns={columns} defaultPageSize={10} filterable />
    </div>
  );
}
