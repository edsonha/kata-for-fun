const isValid = input => {
  const object = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let array = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[" || input[i] === "{") {
      array.push(input[i]);
    } else {
      if (array[array.length - 1] === object[input[i]]) {
        array.pop();
      } else return false;
    }
  }
  return array.length === 0 ? true : false;
};

isValid("{[]}"); //true
isValid("([)]"); //false
isValid("((()(())))"); //true
isValid("(((((((()"); //false
