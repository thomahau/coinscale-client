const moment = require('moment');
const _ = require('lodash');

export function getHoldingsData(date, priceData, allTransactions) {
  // Get all of user's transactions up to and including selected date
  const filteredTransactions = allTransactions.filter(transaction =>
    moment(transaction.date).isSameOrBefore(moment(date)));
  const transactions = _.sortBy(filteredTransactions, ['date']);
  const symbols = new Set(transactions.map(transaction => transaction.symbol));
  const holdingsData = [];

  // Calculate and return various data on each portfolio holding
  symbols.forEach((symbol) => {
    const holding = {
      symbol
    };
    let amount = 0;
    let costBasis = 0;
    let realizedProfit = 0;

    // Amount, cost basis, realized profit/loss
    transactions.forEach((transaction) => {
      if (holding.symbol === transaction.symbol) {
        if (transaction.type === 'Buy') {
          amount += transaction.amount;
          costBasis += transaction.price * transaction.amount;
        } else if (transaction.type === 'Sell') {
          const originalAmount = amount;
          const shareOfOriginalAmount = transaction.amount / originalAmount;
          const transactionTotal = transaction.price * transaction.amount;
          const realizedCostBasis = shareOfOriginalAmount * costBasis;

          realizedProfit += transactionTotal - realizedCostBasis;
          costBasis -= realizedCostBasis;
          amount -= transaction.amount;
        }
      }
    });

    holding.amount = amount;
    holding.costBasis = costBasis;
    holding.realizedProfit = realizedProfit;

    // Price data
    const priceDatum = priceData.filter(p => p.currency === holding.symbol)[0];
    holding.currentPrice = priceDatum.current;
    holding.sevenDaysPerformance = (
      ((priceDatum.current - priceDatum.sevenDaysAgo) / priceDatum.sevenDaysAgo) *
      100
    ).toFixed(2);

    // Current value, unrealized profit/loss
    holding.currentValue = holding.currentPrice * holding.amount;
    holding.unrealizedProfit = holding.currentValue - holding.costBasis;

    holdingsData.push(holding);
  });

  return holdingsData.filter(holding => holding.amount > 0);
}
// Calculate and return aggregated portfolio data based on user's holdings
export function getAggregateData(holdingsData, balance) {
  let costBasis = 0;
  let currentValue = 0;
  // let profit = 0;
  let realizedProfit = 0;
  let unrealizedProfit = 0;

  holdingsData.forEach((holding) => {
    costBasis += +holding.costBasis;
    currentValue += +holding.currentValue;
    // profit += holding.profit;
    realizedProfit += holding.realizedProfit;
    unrealizedProfit += holding.unrealizedProfit;
  });

  // Calculate aggregate 7d performance only for the holdings which have that data available
  const holdingsWithPerformanceData = holdingsData.filter(holding => holding.sevenDaysPerformance !== 'NaN');
  const total7DaysAgo = holdingsWithPerformanceData.reduce(
    (sum, holding) => sum + getPastValue(holding.currentValue, holding.sevenDaysPerformance),
    0
  );
  const sevenDaysPerformance = (100 * (currentValue / total7DaysAgo - 1)).toFixed(2);

  return [
    {
      balance,
      costBasis,
      currentValue,
      realizedProfit,
      unrealizedProfit,
      sevenDaysPerformance
    }
  ];
}

function getPastValue(value, pctChange) {
  return value / (1 + pctChange / 100);
}

export const sortFix = (a, b, desc) => {
  a = parseFloat(a);
  b = parseFloat(b);
  // Force null and undefined to the bottom
  a = a === null || a === undefined ? -Infinity : a;
  b = b === null || b === undefined ? -Infinity : b;
  // Force any string values to lowercase
  a = typeof a === 'string' ? a.toLowerCase() : a;
  b = typeof b === 'string' ? b.toLowerCase() : b;
  // Return either 1 or -1 to indicate a sort priority
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  // Returning 0 or undefined will use any subsequent column sorting methods or the row index as a tiebreaker
  return 0;
};
