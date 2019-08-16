module.exports = class FixedLengthQueue {
  constructor(length) {
    this.fixedQueue = new Array(length);
    this.enqueueSlot = 0;
    this.dequeueSlot = 0;
    this.length = length;
  }

  getSize() {
    return this.length;
  }

  enqueue(item) {
    if (this.enqueueSlot > this.length - 1) {
      throw new Error();
    } else {
      this.fixedQueue[this.enqueueSlot] = item;
      this.enqueueSlot++;
      return this.fixedQueue;
    }
  }

  dequeue() {
    if (this.dequeueSlot < this.enqueueSlot) {
      const dequeueItem = this.fixedQueue[this.dequeueSlot];
      this.dequeueSlot++;
      return dequeueItem;
    }
  }

  peek() {
    return this.fixedQueue[this.dequeueSlot];
  }
};
