module.exports = class CircularQueue {
  constructor(length) {
    if (!length || typeof length !== "number") {
      throw new Error();
    }
    this.circularQueue = new Array(length);
    this.enqueueSlot = 0;
    this.dequeueSlot = 0;
    this.length = length;
  }

  enqueue(item) {
    if (item === undefined) {
      throw new Error("enqueue item cannot be undefined");
    }

    if (this.circularQueue[this.enqueueSlot] !== undefined) {
      throw new Error("max length reached");
    }

    this.circularQueue[this.enqueueSlot] = item;
    this.enqueueSlot++;
    if (this.enqueueSlot === this.length) {
      this.enqueueSlot = 0;
    }
    return this.circularQueue;
  }

  dequeue() {
    if (this.circularQueue[this.dequeueSlot] === undefined) {
      throw new Error("no item in queue");
    }
    const dequeueItem = this.circularQueue[this.dequeueSlot];
    this.circularQueue[this.dequeueSlot] = undefined;
    this.dequeueSlot++;
    if (this.dequeueSlot === this.length) {
      this.dequeueSlot = 0;
    }
    return dequeueItem;
  }

  peek() {
    return this.circularQueue[this.dequeueSlot];
  }

  getSize() {
    return this.length;
  }
};
