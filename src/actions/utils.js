const moment = require('moment');

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

export function round(value, decimals = 2) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`)
    .toFixed(decimals)
    .toString();
}

export function getHoldingsData(date, priceData, allTransactions) {
  const transactions = allTransactions.filter(transaction =>
    moment(transaction.date).isSameOrBefore(moment(date)));
  const symbols = new Set(transactions.map(transaction => transaction.symbol));
  const holdingsData = [];

  symbols.forEach((symbol) => {
    const holding = {
      symbol
    };
    let amount = 0;
    let costBasis = 0;

    // Amount and cost basis
    transactions.forEach((transaction) => {
      if (holding.symbol === transaction.symbol) {
        if (transaction.type === 'Buy') {
          amount += transaction.amount;
          costBasis += transaction.price * transaction.amount;
        } else if (transaction.type === 'Sell') {
          amount -= transaction.amount;
          costBasis -= transaction.price * transaction.amount;
        }
      }
    });
    holding.amount = amount;
    holding.costBasis = costBasis;

    // Price data
    const priceDatum = priceData.filter(p => p.currency === holding.symbol)[0];
    holding.currentPrice = priceDatum.current;
    holding.sevenDaysPerformance = (
      ((priceDatum.current - priceDatum.sevenDaysAgo) / priceDatum.sevenDaysAgo) *
      100
    ).toFixed(2);

    // Profit/Loss
    holding.currentValue = holding.currentPrice * holding.amount;
    holding.profit = holding.currentValue - holding.costBasis;

    holdingsData.push(holding);
  });

  return holdingsData.filter(holding => holding.amount > 0);
}

export function getAggregateData(holdingsData, balance) {
  let costBasis = 0;
  let currentValue = 0;
  let profit = 0;

  holdingsData.forEach((holding) => {
    costBasis += +holding.costBasis;
    currentValue += +holding.currentValue;
    profit += holding.profit;
  });

  const total7DaysAgo = holdingsData.reduce(
    (sum, holding) => sum + getPastValue(holding.currentValue, holding.sevenDaysPerformance),
    0
  );
  const sevenDaysPerformance = (100 * (currentValue / total7DaysAgo - 1)).toFixed(2);

  return [
    {
      balance,
      costBasis,
      currentValue,
      profit,
      sevenDaysPerformance
    }
  ];
}

function getPastValue(value, pctChange) {
  return value / (1 + pctChange / 100);
}
