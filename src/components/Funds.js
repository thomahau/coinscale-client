import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { getHoldingsData, getAggregateData } from '../actions/utils';

export default function Funds(props) {
  const {
    fetching, date, priceData, transactions, portfolio
  } = props;

  if (fetching) {
    return <p>Loading data...</p>;
  }

  const holdingsData = getHoldingsData(date, priceData, portfolio, transactions);
  const aggregateData = getAggregateData(holdingsData);
  const holdingsColumns = [
    {
      Header: 'Symbol',
      accessor: 'symbol',
      Cell: row => (
        <Link to="/dashboard/trade" id={row.value} onClick={e => props.tradeCoin(row.value)}>
          {row.value}
        </Link>
      )
    },
    { Header: 'Amount', accessor: 'amount' },
    {
      Header: 'Cost Basis',
      accessor: 'costBasis',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: 'Current Value',
      accessor: 'currentValue',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: 'Profit/Loss',
      accessor: 'profit',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: 'Current Price',
      accessor: 'currentPrice',
      Cell: props =>
        new Intl.NumberFormat('en-EN', {
          style: 'currency',
          currency: 'USD',
          minimumSignificantDigits: 1,
          maximumSignificantDigits: 3
        }).format(props.value)
    },
    {
      Header: '% 7d',
      accessor: 'sevenDaysPerformance',
      Cell: row => <span style={{ color: row.value > 0 ? 'green' : 'red' }}>{row.value}%</span>
    }
  ];
  const aggregateColumns = [
    {
      Header: 'Cost Basis',
      accessor: 'costBasis',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: 'Current Value',
      accessor: 'currentValue',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: 'Profit/Loss',
      accessor: 'profit',
      Cell: props =>
        (props.value < 1
          ? '~$0'
          : new Intl.NumberFormat('en-EN', {
            style: 'currency',
            currency: 'USD',
            minimumSignificantDigits: 1,
            maximumSignificantDigits: 3
          }).format(props.value))
    },
    {
      Header: '% 7d',
      accessor: 'sevenDaysPerformance',
      Cell: row => <span style={{ color: row.value > 0 ? 'green' : 'red' }}>{row.value}%</span>
    }
  ];

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
            <td>{aggregateData.sevenDaysPerformance}%</td>
          </tr>
        </tbody>
      </Table>

      {/* <ReactTable
        data={aggregateData}
        columns={aggregateColumns}
        defaultPageSize={1}
        showPagination={false}
      /> */}

      <ReactTable
        data={holdingsData}
        columns={holdingsColumns}
        defaultPageSize={10}
        showPagination={false}
      />

      {/* <Table responsive bordered className="mt-3">
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
      </Table> */}
    </div>
  );
}
