class Rental {
  constructor(movies, days) {
    this.movies = movies;
    this.days = days;
  }

  getBill() {
    let rentalBill = 0;
    if (this.movies === undefined) {
      throw new Error(`Invalid movieID`);
    }

    switch (this.movies.code) {
      case "regular":
        rentalBill = 2;
        if (this.days > 2) {
          rentalBill += (this.days - 2) * 1.5;
        }
        break;
      case "new":
        rentalBill = this.days * 3;
        break;
      case "children":
        rentalBill = 1.5;
        if (this.days > 3) {
          rentalBill += (this.days - 3) * 1.5;
        }
        break;
    }
    return rentalBill;
  }
}

module.exports = Rental;
