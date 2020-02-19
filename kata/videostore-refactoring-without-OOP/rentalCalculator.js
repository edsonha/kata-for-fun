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
    case "childrens":
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

function statement(customer, movies) {
  let result = `Rental Record for ${customer.name}\n`;
  for (let rental of customer.rentals) {
    const rentalBill = calculateBillForRental(movies, rental);
    result += printRentalBill(movies, rental, rentalBill);
  }

  let totalBill = 0;
  for (let rental of customer.rentals) {
    const rentalBill = calculateBillForRental(movies, rental);
    totalBill += rentalBill;
  }

  let frequentRenterPoints = 0;
  for (let rental of customer.rentals) {
    frequentRenterPoints++;
    if (getMovie(movies, rental).code === "new" && rental.days > 2)
      frequentRenterPoints++;
  }

  result += `Amount owed is ${totalBill}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;
