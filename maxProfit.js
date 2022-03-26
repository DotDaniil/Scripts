const maxProfit = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (maxProfit < profit) maxProfit = profit;
        }
    };
    return maxProfit;
}
console.log(maxProfit([2,4,1]))

