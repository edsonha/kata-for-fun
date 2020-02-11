const UnitConverter = require("../UnitConverter");
const converter = new UnitConverter();

const calculatePrice = resourcePriceDataArr => {
  if (!Array.isArray(resourcePriceDataArr)) {
    throw new Error("Calculate Price: Argument is not valid");
  }

  const itemPricesObj = {};
  for (let data of resourcePriceDataArr) {
    if (!Array.isArray(data)) {
      throw new Error("Calculate Price: Data is not valid");
    }
    // const quantity = converter.toArabic(data[0]);
    // console.log(quantity);
  }

  return itemPricesObj;
};

module.exports = calculatePrice;
