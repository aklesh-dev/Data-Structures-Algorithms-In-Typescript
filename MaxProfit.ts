// Max Profit
// Imagine you're buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by
// buying low and selling high only once.
// Here's what you're given:
// A list of stock prices for each day 👉 [10, 7, 5, 8, 11, 9]

// Here's what you need to find:
// The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it for later on.

const maxProfit = (prices: number[]):number => {
  if (prices.length < 2) {
    return 0; // Not enough prices to make a profit
  };

  let minPrice = prices[0]; // Assume the first day is the cheapest to buy
  let maxProfit = 0; // Assume no profit at first

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    // console.log(currentPrice)
    
    //  Update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;
    
    maxProfit = Math.max(maxProfit, potentialProfit);

  };
  return maxProfit;
};

const prices = [10, 7, 5, 8, 11, 9];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit);
