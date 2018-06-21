import { PORTFOLIO_REQUEST, PORTFOLIO_SUCCESS, PORTFOLIO_ERROR } from '../actions/portfolio';

import {
  TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  ADD_TRANSACTION_SUCCESS,
  RESET_TRANSACTION_SUCCESS,
  TRANSACTIONS_ERROR
} from '../actions/transactions';

import {
  CHANGE_DATE,
  PRICE_DATA_REQUEST,
  PRICE_DATA_SUCCESS,
  PRICE_DATA_ERROR,
  SET_TRADE_COIN
} from '../actions/coinscale';

const initialPriceData = [
  {
    currency: 'BTC',
    current: '1017.20065',
    name: 'Bitcoin',
    sevenDaysAgo: '914.19659'
  },
  {
    currency: 'DASH',
    current: '11.66870',
    name: 'Dash',
    sevenDaysAgo: '9.96277'
  },
  {
    currency: 'DOGE',
    current: '0.00022',
    name: 'Dogecoin',
    sevenDaysAgo: '0.00024'
  },
  {
    currency: 'ETH',
    current: '8.26940',
    name: 'Ethereum',
    sevenDaysAgo: '7.32209'
  },
  {
    currency: 'LTC',
    current: '4.52392',
    name: 'Litecoin',
    sevenDaysAgo: '4.45150'
  },
  {
    currency: 'XEM',
    current: '0.00348',
    name: 'NEM',
    sevenDaysAgo: '0.00361'
  },
  {
    currency: 'XLM',
    current: '0.00250',
    name: 'Stellar',
    sevenDaysAgo: '0.00262'
  },
  {
    currency: 'XMR',
    current: '14.27937',
    name: 'Monero',
    sevenDaysAgo: '9.76703'
  },
  {
    currency: 'XRP',
    current: '0.00642',
    name: 'Ripple',
    sevenDaysAgo: '0.00656'
  }
];

const initialState = {
  date: '2017-01-01',
  // coinList,
  // priceData: [],
  priceData: initialPriceData,
  coinToTrade: null,
  transactions: [],
  transactionSuccess: null,
  portfolio: {},
  fetching: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === PORTFOLIO_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === PORTFOLIO_SUCCESS) {
    return Object.assign({}, state, {
      portfolio: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === PORTFOLIO_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === CHANGE_DATE) {
    return Object.assign({}, state, {
      date: action.date
    });
  } else if (action.type === PRICE_DATA_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === PRICE_DATA_SUCCESS) {
    return Object.assign({}, state, {
      priceData: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === PRICE_DATA_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === TRANSACTIONS_REQUEST) {
    return Object.assign({}, state, {
      fetching: true,
      error: null
    });
  } else if (action.type === FETCH_TRANSACTIONS_SUCCESS) {
    return Object.assign({}, state, {
      transactions: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === ADD_TRANSACTION_SUCCESS) {
    return Object.assign({}, state, {
      transactionSuccess: action.data,
      fetching: false,
      error: null
    });
  } else if (action.type === RESET_TRANSACTION_SUCCESS) {
    return Object.assign({}, state, {
      transactionSuccess: action.data
    });
  } else if (action.type === TRANSACTIONS_ERROR) {
    return Object.assign({}, state, {
      fetching: false,
      error: action.error
    });
  } else if (action.type === SET_TRADE_COIN) {
    return Object.assign({}, state, {
      coinToTrade: action.coin
    });
  }

  return state;
}
