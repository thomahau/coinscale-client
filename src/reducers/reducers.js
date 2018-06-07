// import * as actions from '../actions';

const MOCK_DATA = [
  {
    currency: 'BTC',
    open: 4359.11808,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 3687.24081,
    close_timestamp: '2017-09-16T00:00:00Z'
  },
  {
    currency: 'ETH',
    open: 307.09695,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 253.24776,
    close_timestamp: '2017-09-16T00:00:00Z'
  },
  {
    currency: 'LTC',
    open: 73.5457,
    open_timestamp: '2017-09-09T00:00:00Z',
    close: 51.5843,
    close_timestamp: '2017-09-16T00:00:00Z'
  }
];

const MOCK_TRANSACTIONS = [
  {
    timestamp: '2017-01-01',
    type: 'Buy',
    currency: 'BTC',
    price: 1017.20065,
    amount: 1
  },
  {
    timestamp: '2017-01-01',
    type: 'Buy',
    currency: 'ETH',
    price: 8.2694,
    amount: 50
  }
];

const MOCK_PORTFOLIO = [
  {
    currency: 'BTC',
    amount: 1.0
  },
  {
    currency: 'ETH',
    amount: 50
  }
];

const initialState = {
  auth: {
    // authToken: ,
    currentUser: 'John Doe'
  },
  selected_timestamp: 1505520000, // 16/09/2017
  balance: 18569.3, // after mock purchases $1430.67065
  transactions: MOCK_TRANSACTIONS,
  portfolio: MOCK_PORTFOLIO,
  data: MOCK_DATA
};

export const coinscaleReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};
