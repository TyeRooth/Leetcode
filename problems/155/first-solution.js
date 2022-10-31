const MinStack = function () {
    this.stack = [];
    this.mins = [];
}

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (!this.mins.length || val <= this.mins[this.mins.length - 1]) {
        this.mins.push(val);
    };
    return null;
};

MinStack.prototype.pop = function () {
    const popped = this.stack.pop()
    if (popped === this.mins[this.mins.length -1]) {
        this.mins.pop();
    }
    return null;
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.mins[this.mins.length - 1];
};

export default MinStack;