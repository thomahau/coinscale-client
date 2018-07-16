import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { sortFix } from '../../../../../helpers';

export default function CoinsTable(props) {
  const data = props.priceData.map(coin => ({
    symbol: coin.currency,
    name: coin.name,
    price: parseFloat(coin.current),
    sevenDaysPerformance:
      coin.sevenDaysAgo === 'N/A'
        ? 'N/A'
        : (((coin.current - coin.sevenDaysAgo) / coin.sevenDaysAgo) * 100).toFixed(2)
  }));
  const columns = [
    {
      Header: <span className="u-pull-left">Name</span>,
      accessor: 'name',
      filterMethod: (filter, row) =>
        row[filter.id].includes(filter.value) || row[filter.id].toLowerCase().includes(filter.value)
    },
    {
      Header: <span className="u-pull-left">Symbol</span>,
      accessor: 'symbol',
      maxWidth: 80,
      Cell: row => (
        <button className="table-btn" onClick={() => props.tradeCoin(row.value)}>
          {row.value}
        </button>
      ),
      filterMethod: (filter, row) =>
        row[filter.id].includes(filter.value) || row[filter.id].toLowerCase().includes(filter.value)
    },
    {
      Header: <span className="u-pull-right">Current Price</span>,
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
      Header: <span className="u-pull-right">% 7d</span>,
      accessor: 'sevenDaysPerformance',
      sortMethod: (a, b, desc) => sortFix(a, b, desc),
      Cell: row =>
        (row.value === 'N/A' ? (
          <span className="monospace u-pull-right">N/A</span>
        ) : (
          <span
            className="monospace u-pull-right"
            style={{ color: row.value >= 0 ? 'green' : 'red' }}
          >
            {row.value}%
          </span>
        ))
    }
  ];

  return (
    <div className="card-body">
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={20}
        filterable
        className="-striped"
      />
    </div>
  );
}
