import protectedDataReducer from './protected-data';
import { portfolioRequest, portfolioSuccess, portfolioError } from '../actions/portfolio';
import {
  transactionsRequest,
  fetchTransactionsSuccess,
  addTransactionSuccess,
  resetTransactionSuccess,
  transactionsError
} from '../actions/transactions';

import {
  changeDate,
  priceDataRequest,
  priceDataSuccess,
  priceDataError,
  setTradeCoin
} from '../actions/coinscale';

describe('protectedDataReducer', () => {});
