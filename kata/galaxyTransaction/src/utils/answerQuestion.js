const answerQuestion = (questionsData, converter, shop) => {
  if (!Array.isArray(questionsData)) {
    throw new Error("Answer question: Argument is not valid");
  }

  let answer = "";
  for (let question of questionsData) {
    const [galaticNums, item] = question;
    if (!galaticNums) {
      answer += "I have no idea what you are talking about\n";
    }
    if (galaticNums && !item) {
      const number = converter.toArabic(galaticNums);
      answer += `${galaticNums} is ${number}\n`;
    }
    if (galaticNums && item) {
      const itemQuantity = converter.toArabic(galaticNums);
      const totalPrice = itemQuantity * shop.getPrice(item);
      answer += `${galaticNums} ${item} is ${totalPrice} Credits\n`;
    }
  }
  return answer;
};

module.exports = answerQuestion;
