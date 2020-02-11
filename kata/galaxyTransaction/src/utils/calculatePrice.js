const calculatePrice = (resourcePriceDataArr, converter) => {
  if (!Array.isArray(resourcePriceDataArr)) {
    throw new Error("Calculate Price: Argument is not valid");
  }

  const itemPricesObj = {};
  for (let data of resourcePriceDataArr) {
    if (!Array.isArray(data)) {
      throw new Error("Calculate Price: Data is not valid");
    }
    const [galaticNum, item, cost] = data;
    const quantity = converter.toArabic(galaticNum);
    const itemPrice = cost / quantity;
    itemPricesObj[item] = itemPrice;
  }

  return itemPricesObj;
};

module.exports = calculatePrice;
