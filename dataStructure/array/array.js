module.exports = class NewArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  deleteAtIndex(index) {
    const deleteditem = this.data[index];
    this.shiftItems(index);
    return deleteditem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    // console.log(this.data[this.length - 1]); //to check if the last item is deleted or not
    delete this.data[this.length - 1];
    this.length--;
  }
};
