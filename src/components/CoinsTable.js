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
    { Header: 'Name', accessor: 'name' },
    {
      Header: 'Symbol',
      accessor: 'symbol',
      Cell: row => (
        <Link to="/dashboard/trade" id={row.value} onClick={e => props.tradeCoin(row.value)}>
          {row.value}
        </Link>
      )
    },
    {
      Header: 'Current Price',
      accessor: 'price',
      Cell: props =>
        new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'USD',
          minimumSignificantDigits: 1,
          maximumSignificantDigits: 4
        }).format(props.value)
    },
    {
      Header: '% 7d',
      accessor: 'sevenDaysPerformance',
      Cell: row => <span style={{ color: row.value > 0 ? 'green' : 'red' }}>{row.value}%</span>
    }
  ];

  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultPageSize={20}
      showPagination={false}
      filterable
    />
  );
}
