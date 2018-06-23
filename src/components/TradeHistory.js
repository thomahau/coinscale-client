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
    { Header: 'Date', accessor: 'date' },
    { Header: 'Symbol', accessor: 'symbol' },
    {
      Header: 'Type',
      accessor: 'type',
      Cell: row => <span style={{ color: row.value === 'Buy' ? 'green' : 'red' }}>{row.value}</span>
    },
    {
      Header: 'Price',
      accessor: 'price',
      Cell: props =>
        new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'USD',
          minimumSignificantDigits: 1,
          maximumSignificantDigits: 4
        }).format(props.value)
    },
    { Header: 'Amount', accessor: 'amount' },
    {
      Header: 'Total',
      accessor: 'total',
      Cell: props =>
        new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'USD',
          minimumSignificantDigits: 1,
          maximumSignificantDigits: 4
        }).format(props.value)
    }
  ];

  return (
    <div>
      <h4 className="mb-4">Trade History</h4>
      <ReactTable data={data} columns={columns} defaultPageSize={10} filterable />
    </div>
  );
}
