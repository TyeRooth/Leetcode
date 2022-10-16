const maxProfit = (prices) => {
    let highestProfit = 0;
    let lowest = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        }
        if (prices[i] - lowest > highestProfit) {
            highestProfit = prices[i] - lowest;
        }
    }
    return highestProfit;
};

export default maxProfit;