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
      Header: <span className="u-pull-left">Date</span>,
      accessor: 'date',
      maxWidth: 140,
      Cell: props => <span className="monospace">{props.value}</span>
    },
    {
      Header: <span className="u-pull-left">Symbol</span>,
      accessor: 'symbol',
      maxWidth: 100,
      filterMethod: (filter, row) =>
        row[filter.id].includes(filter.value) || row[filter.id].toLowerCase().includes(filter.value)
    },
    {
      Header: <span className="u-pull-left">Type</span>,
      accessor: 'type',
      maxWidth: 100,
      Cell: row => (
        <span style={{ color: row.value === 'Buy' ? 'green' : 'red' }}>{row.value}</span>
      ),
      filterMethod: (filter, row) =>
        row[filter.id].includes(filter.value) || row[filter.id].toLowerCase().includes(filter.value)
    },
    {
      Header: <span className="u-pull-right">Price</span>,
      accessor: 'price',
      Cell: row => (
        <span className="monospace u-pull-right">
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1
          }).format(row.value)}
        </span>
      )
    },
    {
      Header: <span className="u-pull-right">Amount</span>,
      accessor: 'amount',
      Cell: props => <span className="monospace u-pull-right">{props.value}</span>
    },
    {
      Header: <span className="u-pull-right">Total</span>,
      accessor: 'total',
      Cell: row => (
        <span className="monospace u-pull-right">
          {new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
          }).format(row.value)}
        </span>
      )
    }
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={10}
      pageSizeOptions={[5, 10, 20, 50]}
      minRows={3}
      filterable
      className="-striped"
      noDataText="No transactions found"
    />
  );
}
