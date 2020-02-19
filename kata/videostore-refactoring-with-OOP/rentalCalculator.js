const Customer = require("./Customer");
const Rental = require("./Rental");

function getMovie(movies, rental) {
  return movies[rental.movieID];
}

function calculateBillForRental(movies, rental) {
  let rentalBill = 0;
  if (getMovie(movies, rental) === undefined) {
    throw new Error(`Invalid movieID`);
  }

  switch (getMovie(movies, rental).code) {
    case "regular":
      rentalBill = 2;
      if (rental.days > 2) {
        rentalBill += (rental.days - 2) * 1.5;
      }
      break;
    case "new":
      rentalBill = rental.days * 3;
      break;
    case "children":
      rentalBill = 1.5;
      if (rental.days > 3) {
        rentalBill += (rental.days - 3) * 1.5;
      }
      break;
  }
  return rentalBill;
}

function printRentalBill(movies, rental, rentalBill) {
  return `\t${getMovie(movies, rental).title}\t${rentalBill}\n`;
}

function qualifiedForExtraFrequentRenterPoint(rental) {
  return rental.movies.code === "new" && rental.days > 2;
}

function getTotalBill(customer, movies) {
  let totalBill = 0;
  for (let rental of customer.rentals) {
    const rentalBill = calculateBillForRental(movies, rental);
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

  for (let rental of customer.rentals) {
    const rentalBill = calculateBillForRental(movies, rental);
    result += printRentalBill(movies, rental, rentalBill);
  }

  const totalBill = getTotalBill(customer, movies);
  calculateFrequentRenterPoints(cust, rentals);

  result += `Amount owed is ${totalBill}\n`;
  result += `You earned ${cust.frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;
