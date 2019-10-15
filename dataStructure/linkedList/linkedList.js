class Node {
  constructor(data, next) {
    if (next && !(next instanceof Node)) {
      throw new Error("not a node");
    }
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  unshift(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    }
    if (!this.head) {
      this.head = node;
      this.head.next = null;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  shift() {
    if (!this.head) {
      return this.head;
    }
    const itemToReturn = this.head;
    this.head = this.head.next;
    return itemToReturn;
  }

  getLast() {
    if (!this.head) {
      return this.head;
    }
    let curItem = this.head;
    while (curItem.next) {
      curItem = curItem.next;
    }
    return curItem;
  }

  pop() {
    if (!this.head) {
      return this.head;
    } else if (this.head.next === null) {
      const lastItem = this.head;
      this.head = null;
      return lastItem;
    }
    let curItem = this.head;
    let nextItem = this.head.next;
    while (nextItem.next) {
      curItem = nextItem;
      nextItem = nextItem.next;
    }
    curItem.next = null;
    return nextItem;
  }

  push(node) {
    if (!(node instanceof Node)) {
      throw new Error("not a node");
    }
    if (!this.head) {
      this.head = node;
    } else {
      let lastItem = this.getLast();
      lastItem.next = node;
    }
  }

  getSize() {
    if (!this.head) {
      return 0;
    }
    let counter = 1;
    let curItem = this.head;
    while (curItem.next) {
      counter++;
      curItem = curItem.next;
    }
    return counter;
  }

  getAt(index) {
    if (isNaN(index)) {
      throw new Error("not a number");
    } else if (index < 0) {
      throw new Error("index out of bound");
    }
    let counter = 0;
    let curItem = this.head;
    while (counter !== index) {
      if (curItem && curItem.next !== null) {
        curItem = curItem.next;
        counter++;
      } else {
        throw new Error("index out of bound");
      }
    }
    return curItem;
  }

  insertAt(index, node) {
    if (index < 0) {
      throw new Error("index out of bound");
    } else if (!(node instanceof Node)) {
      throw new Error("not a node");
    }
    if (index === 0) {
      this.unshift(node);
    } else if (index > this.getSize()) {
      throw new Error("index out of bound");
    } else {
      const itemBeforeInsertion = this.getAt(index - 1);
      const nextItemBeforeInsertion = itemBeforeInsertion.next;
      itemBeforeInsertion.next = node;
      node.next = nextItemBeforeInsertion;
    }
  }

  removeAt(index) {
    if (isNaN(index)) {
      throw new Error("not a number");
    } else if (index === 0) {
      let curItem = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
      }
      return curItem;
    } else {
      const itemBeforeDeletion = this.getAt(index - 1);
      if (!itemBeforeDeletion || !itemBeforeDeletion.next) {
        throw new Error("index out of bound");
      }
      const deletedItem = itemBeforeDeletion.next;
      itemBeforeDeletion.next = deletedItem.next;
      return deletedItem;
    }
  }
}

module.exports = {
  Node,
  LinkedList
};
