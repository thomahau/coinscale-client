import React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
    { Header: <span className="u-pull-left">Name</span>, accessor: 'name' },
    {
      Header: <span className="u-pull-left">Symbol</span>,
      accessor: 'symbol',
      Cell: row => (
        <Link to="/dashboard/trade" id={row.value} onClick={e => props.tradeCoin(row.value)}>
          {row.value}
        </Link>
      )
    },
    {
      Header: <span className="u-pull-right">Current Price</span>,
      accessor: 'price',
      Cell: row => (
        <span className="monospace u-pull-right">
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
      Header: <span className="u-pull-right">% 7d</span>,
      accessor: 'sevenDaysPerformance',
      Cell: row => (
        <span className="monospace u-pull-right" style={{ color: row.value > 0 ? 'green' : 'red' }}>
          {row.value}%
        </span>
      )
    }
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={20}
      showPagination={false}
      className="-striped"
    />
  );
}
