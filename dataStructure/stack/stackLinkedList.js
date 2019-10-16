//Stack - using LinkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const previousTopNode = this.top;
      this.top = newNode;
      this.top.next = previousTopNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    // const previousTopNode = this.top; //Optional. Do this when you still want to reference. If not, it will get deleted
    this.top = this.top.next;
    this.length--;
    if (this.length === 0) {
      this.bottom = null;
    }
    return this;
  }
}

const myStack = new Stack();
myStack.peek(); //return null
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek(); //return discord
myStack.pop(); //delete discord
myStack.pop(); //delete udemy
myStack.pop(); //delete google
