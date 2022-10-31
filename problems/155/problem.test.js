import MinStack from './first-solution';

test('leetcode example', () => {
    const stackObj = new MinStack();
    expect(stackObj.push(-2)).toBe(null);
    expect(stackObj.push(0)).toBe(null);
    expect(stackObj.push(-3)).toBe(null);
    expect(stackObj.getMin()).toBe(-3);
    expect(stackObj.pop()).toBe(null);
    expect(stackObj.top()).toBe(0);
    expect(stackObj.getMin()).toBe(-2);
});

test('increasing order', () => {
    const stackObj = new MinStack();
    stackObj.push(1);
    stackObj.push(2);
    stackObj.push(3);
    stackObj.push(4);
    stackObj.pop();
    expect(stackObj.top()).toBe(3);
    expect(stackObj.getMin()).toBe(1);
});

test('double counts of mins', () => {
    const stackObj = new MinStack();
    stackObj.push(0);
    stackObj.push(-1);
    stackObj.push(-1);
    stackObj.pop();
    expect(stackObj.getMin()).toBe(-1);
})