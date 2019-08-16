module.exports = class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
};
