class QueueElement {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  printQueue() {
    let printQueue = "";
    for (let element of this.queue) {
      printQueue += element.name + " ";
    }
    return printQueue;
  }

  enqueue(name, priority) {
    const queueElement = new QueueElement(name, priority);
    let enqueueDone = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > queueElement.priority) {
        this.queue.splice(i, 0, queueElement);
        enqueueDone = true;
        break;
      }
    }

    if (!enqueueDone) {
      this.queue.push(queueElement);
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  peekFront() {
    return this.queue[0];
  }

  peekBack() {
    return this.queue[this.queue.length - 1];
  }
}

module.exports = { PriorityQueue, QueueElement };
