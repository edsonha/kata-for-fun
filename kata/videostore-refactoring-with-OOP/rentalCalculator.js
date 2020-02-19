const Customer = require("./Customer");
const Rental = require("./Rental");

function printRentalBill(rental, rentalBill) {
  return `\t${rental.movies.title}\t${rentalBill}\n`;
}

function qualifiedForExtraFrequentRenterPoint(rental) {
  return rental.movies.code === "new" && rental.days > 2;
}

function getTotalBill(rentals) {
  let totalBill = 0;
  for (let rental of rentals) {
    const rentalBill = rental.getBill();
    totalBill += rentalBill;
  }
  return totalBill;
}

function calculateFrequentRenterPoints(cust, rentals) {
  for (let rental of rentals) {
    cust.incrementRentalPoints();
    if (qualifiedForExtraFrequentRenterPoint(rental))
      cust.incrementRentalPoints();
  }
  return cust.frequentRenterPoints;
}

function statement(customer, movies) {
  const cust = new Customer(customer.name);
  let result = `Rental Record for ${cust.name}\n`;
  const rentals = customer.rentals.map(
    rental => new Rental(movies[rental.movieID], rental.days)
  );

  for (let rental of rentals) {
    const rentalBill = rental.getBill();
    result += printRentalBill(rental, rentalBill);
  }

  const totalBill = getTotalBill(rentals);
  calculateFrequentRenterPoints(cust, rentals);

  result += `Amount owed is ${totalBill}\n`;
  result += `You earned ${cust.frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;
