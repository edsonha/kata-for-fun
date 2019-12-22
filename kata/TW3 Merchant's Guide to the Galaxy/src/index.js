class Dictionary {
  constructor() {
    this.wordsList = {
      glob: 1,
      prok: 5
    };
  }

  convertInputToArray(input) {
    return input.split(" ");
  }

  convertAlienNumberToHumanNumber(input) {
    const wordsArray = this.convertInputToArray(input);
    let sum = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    for (let index = 0; index < wordsArray.length; index++) {
      current = wordsArray[index];
      currentValue = this.wordsList[current];
      next = wordsArray[index + 1];
      nextValue = this.wordsList[next];

      if (currentValue < nextValue) {
        sum -= currentValue;
      } else {
        sum += currentValue;
      }
    }
    return sum;
  }
}

module.exports = Dictionary;
