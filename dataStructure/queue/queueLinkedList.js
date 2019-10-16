//Queue - using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    // const holdingPointer = this.first; //Optional if you do not want to delete
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.peek(); //return null
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek(); //return Joy
myQueue.dequeue(); //delete Joy
myQueue.dequeue(); //delete Matt
myQueue.dequeue(); //delete Pavel
