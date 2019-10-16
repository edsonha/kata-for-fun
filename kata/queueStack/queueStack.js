// Implement Queue using Stacks
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.peek(); //return undefined
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek(); //return "Joy"
myQueue.dequeue(); //delete Joy
myQueue.peek(); //return "Matt"
myQueue.enqueue("Samir");
myQueue.peek(); //return "Matt"
myQueue.dequeue(); //delete Matt
myQueue.dequeue(); //delete Pavel
myQueue.dequeue(); //delete Samir
myQueue.peek(); //return undefined
