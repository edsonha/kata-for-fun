class Customer {
  constructor(name) {
    this.name = name;
    this.frequentRenterPoints = 0;
  }

  incrementRentalPoints() {
    this.frequentRenterPoints++;
  }
}

module.exports = Customer;
