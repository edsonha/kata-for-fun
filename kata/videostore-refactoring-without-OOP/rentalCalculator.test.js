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

describe("App", () => {
  it("should display customer name in the rental bill", () => {
    expect(statement(customer, movies)).toMatch(/Rental Record for martin/);
  });

  it("should calculate throw an error when the movieId is not valid", () => {
    const errMsg = `Invalid movieID`;
    let customer2 = {
      name: "fowler",
      rentals: [{ movieID: "F006", days: 3 }]
    };
    expect(() => statement(customer2, movies)).toThrow(errMsg);
  });

  it("should calculate rental bill for a regular movie when it's rented for less than or equal two days", () => {
    expect(statement(customer, movies)).toMatch(/Trois Couleurs: Bleu\s2\n/);
  });

  it("should calculate rental bill for a regular movie when it's rented for more than two days", () => {
    expect(statement(customer, movies)).toMatch(/Ran\s3.5\n/);
  });

  it("should calculate rental bill for a new movie ", () => {
    expect(statement(customer, movies)).toMatch(/New movie\s30\n/);
  });

  it("should calculate rental bill for a children movie when it's rented for less than or equal three days", () => {
    expect(statement(customer, movies)).toMatch(/Kid movie1\s+1.5\n/);
  });

  it("should calculate rental bill for a children movie when it's rented for more than three days", () => {
    expect(statement(customer, movies)).toMatch(/Kid movie2\s+3\n/);
  });

  it("should add a new frequent renter point for each new rent by default", () => {
    let customer2 = {
      name: "fowler",
      rentals: [
        { movieID: "F001", days: 3 },
        { movieID: "F002", days: 1 }
      ]
    };

    expect(statement(customer2, movies)).toMatch(/2 frequent renter points\n/);
  });

  it("should add bonus frequent renter point for each rent on new movie with more than 2 days", () => {
    expect(statement(customer, movies)).toMatch(/6 frequent renter points\n/);
  });

  it("should calculate the total rental amount when there is only one movie", () => {
    let customer3 = {
      name: "kent",
      rentals: [{ movieID: "F001", days: 3 }]
    };

    expect(statement(customer3, movies)).toMatch(/Amount owed is 3.5\n/);
  });

  it("should calculate the total rental amount when there are multiple movies", () => {
    expect(statement(customer, movies)).toMatch(/Amount owed is 40\n/);
  });
});
