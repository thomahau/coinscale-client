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

export const parsePurchase = (values) => {
  const portfolio = { ...values.portfolio };
  const balance = portfolio.balance - parseFloat(values.total);
  const { holdings } = portfolio;

  if (holdings.hasOwnProperty(values.symbol)) {
    holdings[values.symbol] += parseFloat(values.amount);
  } else {
    holdings[values.symbol] = parseFloat(values.amount);
  }
  portfolio.balance = balance;
  portfolio.holdings = holdings;

  return portfolio;
};
