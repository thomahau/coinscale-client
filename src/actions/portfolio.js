import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const PORTFOLIO_REQUEST = 'PORTFOLIO_REQUEST';
export const portfolioRequest = () => ({
  type: PORTFOLIO_REQUEST
});

export const PORTFOLIO_SUCCESS = 'PORTFOLIO_SUCCESS';
export const portfolioSuccess = data => ({
  type: PORTFOLIO_SUCCESS,
  data
});

export const PORTFOLIO_ERROR = 'PORTFOLIO_ERROR';
export const portfolioError = error => ({
  type: PORTFOLIO_ERROR,
  error
});

export const fetchPortfolio = () => (dispatch, getState) => {
  dispatch(portfolioRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/portfolio`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ portfolio }) => dispatch(portfolioSuccess(portfolio)))
    .catch((err) => {
      dispatch(portfolioError(err));
    });
};

export const updatePortfolio = portfolio => (dispatch, getState) => {
  dispatch(portfolioRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/portfolio/${portfolio.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(portfolio)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch((err) => {
      dispatch(portfolioError(err));
    });
};
