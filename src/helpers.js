export function round(value, decimals = 2) {
  return Number(`${Math.round(`${value}e${decimals}`)}e-${decimals}`)
    .toFixed(decimals)
    .toString();
}

export function getHoldingsData(priceData, portfolio, transactions) {
  const holdingsData = [];
  portfolio.forEach((holding) => {
    const data = {
      currency: holding.currency,
      amount: holding.amount
    };
    let costBasis = 0;

    transactions.forEach((transaction) => {
      if (holding.currency === transaction.currency) {
        if (transaction.type === 'Buy') {
          costBasis += transaction.price * transaction.amount;
        } else if (transaction.type === 'Sell') {
          costBasis -= transaction.price * transaction.amount;
        }
      }
    });
    data.costBasis = round(costBasis);

    priceData.forEach((coin) => {
      if (holding.currency === coin.currency) {
        data.currentPrice = round(coin.close);
        data.wPerformance = round(coin.close - coin.open);
      }
    });
    data.currentValue = round(data.currentPrice * data.amount);

    holdingsData.push(data);
  });

  return holdingsData;

  // return [
  //   {
  //     currency: 'BTC',
  //     amount: 1.0
  //   },
  //   {
  //     currency: 'ETH',
  //     amount: 50
  //   }
  // ];
}

export function getAggregateData(holdingsData) {
  let costBasis = 0;
  let currentValue = 0;
  let wPerformance = 0;

  holdingsData.forEach((holding) => {
    costBasis += Number(holding.costBasis);
    currentValue += Number(holding.currentValue);
    wPerformance += Number(holding.wPerformance);
  });

  return {
    costBasis: round(costBasis),
    currentValue: round(currentValue),
    wPerformance: round(wPerformance)
  };
}
