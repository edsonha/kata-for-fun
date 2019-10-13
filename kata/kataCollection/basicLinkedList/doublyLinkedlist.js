class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    nodeBeforeInsertion.next = newNode;
    newNode.next = nodeAfterInsertion;
    newNode.prev = nodeBeforeInsertion;
    nodeAfterInsertion.prev = newNode;
    this.length++;
    return this;
  }

  delete(index) {
    const nodeBeforeDeletion = this.traverseToIndex(index - 1);
    const nodeToDelete = nodeBeforeDeletion.next;
    const nodeAfterDeletion = nodeToDelete.next;
    nodeBeforeDeletion.next = nodeAfterDeletion;
    nodeAfterDeletion.prev = nodeBeforeDeletion;
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

let myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 3);
myLinkedList.insert(999, 999);
myLinkedList.delete(2);
myLinkedList.printList(); //[1, 2, 4, 5, 999]
