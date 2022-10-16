// import maxProfit from "./first-solution";
import maxProfit from "./second-solution";

test('finds max profit from prices', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
});

test('profit is 0 is prices descend over time', () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
});