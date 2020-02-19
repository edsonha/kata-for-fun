const { NewMovie } = require("./Movie");

class Rental {
  constructor(movies, days) {
    this.movies = movies;
    this.days = days;
  }

  getBill() {
    return this.movies.getBillForRental(this.days);
  }

  qualifiedForExtraFrequentRenterPoint() {
    return this.movies instanceof NewMovie && this.days > 2;
  }
}

module.exports = Rental;
