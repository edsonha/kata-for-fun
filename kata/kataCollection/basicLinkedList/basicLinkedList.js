class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    //check parameter. If index is bigger than the length, it is assumed that it is prepend operation.
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    const nodeBeforeInsertion = this.traverseToIndex(index - 1);
    const nodeAfterInsertion = nodeBeforeInsertion.next;
    newNode.next = nodeAfterInsertion;
    nodeBeforeInsertion.next = newNode;
    this.length++;
    return this;
  }

  delete(index) {
    const nodeBeforeInsertion = this.traverseToIndex(index - 1);
    const nodeToDelete = nodeBeforeInsertion.next;
    nodeBeforeInsertion.next = nodeToDelete.next;
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 3);
myLinkedList.insert(999, 999);
myLinkedList.delete(2);
myLinkedList.printList(); //[1, 2, 4, 5, 999]
