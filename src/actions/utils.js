// Boilerplate code for handling errors from the API.  If the error response
// contains JSON then we return a rejected promise containing the decoded
// JSON.  If the error doesn't contain JSON then we return a rejected promise
// containing the status text.  If there is no error then we continue with
// the promise chain.
export const normalizeResponseErrors = (res) => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      // It's a nice JSON error returned by us, so decode it
      return res.json().then(err => Promise.reject(err));
    }
    // It's a less informative error returned by express
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};

export const parseTransaction = values => ({
  date: values.date,
  type: values.type,
  symbol: values.symbol,
  price: parseFloat(values.price),
  amount: parseFloat(values.amount)
});

export const parsePurchase = (portfolio, symbol, amount, total) => {
  portfolio.balance -= parseFloat(total);

  if (portfolio.holdings.hasOwnProperty(symbol)) {
    portfolio.holdings[symbol] += parseFloat(amount);
  } else {
    portfolio.holdings[symbol] = parseFloat(amount);
  }

  return portfolio;
};

export const parseSale = (portfolio, symbol, amount, total) => {
  portfolio.balance += parseFloat(total);
  portfolio.holdings[symbol] -= parseFloat(amount);

  return portfolio;
};
