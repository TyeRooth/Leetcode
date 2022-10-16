const maxProfit = (prices) => {
    let highestProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const futurePrices = prices.slice(i + 1);
        for (let j = 0; j < futurePrices.length; j++) {
            if (futurePrices[j] - prices[i] > highestProfit) {
                highestProfit = futurePrices[j] - prices[i];
            }
        }
    }
    return highestProfit;
};

export default maxProfit;