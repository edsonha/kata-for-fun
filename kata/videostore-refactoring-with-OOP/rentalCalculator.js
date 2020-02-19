const Customer = require("./Customer");
const Rental = require("./Rental");
const { createMovie } = require("./Movie");

function printRentalBill(rental, rentalBill) {
  return `\t${rental.movies.title}\t${rentalBill}\n`;
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
    if (rental.qualifiedForExtraFrequentRenterPoint())
      cust.incrementRentalPoints();
  }
  return cust.frequentRenterPoints;
}

function statement(customer, movies) {
  const cust = new Customer(customer.name);
  let result = `Rental Record for ${cust.name}\n`;
  const rentals = customer.rentals.map(rental => {
    const movieDetails = movies[rental.movieID];
    const movie = createMovie(
      rental.movieID,
      movieDetails.title,
      movieDetails.code
    );
    return new Rental(movie, rental.days);
  });

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
