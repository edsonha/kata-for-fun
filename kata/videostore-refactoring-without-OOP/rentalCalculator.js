function getMovie(movies, rental) {
  return movies[rental.movieID];
}

function statement(customer, movies) {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let rental of customer.rentals) {
    let thisAmount = 0;

    if (getMovie(movies, rental) === undefined) {
      throw new Error(`Invalid movieID`);
    }

    switch (getMovie(movies, rental).code) {
      case "regular":
        thisAmount = 2;
        if (rental.days > 2) {
          thisAmount += (rental.days - 2) * 1.5;
        }
        break;
      case "new":
        thisAmount = rental.days * 3;
        break;
      case "childrens":
        thisAmount = 1.5;
        if (rental.days > 3) {
          thisAmount += (rental.days - 3) * 1.5;
        }
        break;
    }

    frequentRenterPoints++;
    if (getMovie(movies, rental).code === "new" && rental.days > 2)
      frequentRenterPoints++;

    result += `\t${getMovie(movies, rental).title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }

  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
}

module.exports = statement;
