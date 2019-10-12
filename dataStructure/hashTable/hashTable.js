module.exports = class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  //O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  //O(1) if there is no collision. If there is, the worse is O(n)

  keys() {
    // O(n^2) solution
    // const keysArray = [];
    // for (let i = 0; i < this.data.length; i++) {
    //   if (this.data[i]) {
    //     for (let j = 0; j < this.data[i].length; j++) {
    //       keysArray.push(this.data[i][j][0]);
    //     }
    //   }
    // }
    // return keysArray;

    // JS Method solution
    return this.data.flat().map(curr => curr[0]);
  }
};
