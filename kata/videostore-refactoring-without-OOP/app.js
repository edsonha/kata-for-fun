const statement = require("./rentalCalculator");

let customer = {
  name: "martin",
  rentals: [
    { movieID: "F001", days: 3 },
    { movieID: "F002", days: 1 },
    { movieID: "F003", days: 10 },
    { movieID: "F004", days: 3 },
    { movieID: "F005", days: 4 }
  ]
};

let movies = {
  F001: { title: "Ran", code: "regular" },
  F002: { title: "Trois Couleurs: Bleu", code: "regular" },
  F003: { title: "New movie", code: "new" },
  F004: { title: "Kid movie1", code: "childrens" },
  F005: { title: "Kid movie2", code: "childrens" }
};

console.log(statement(customer, movies));
