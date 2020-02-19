class Movie {
  constructor(id, title, code) {
    this.id = id;
    this.title = title;
    this.code = code;
  }
}

class ChildrenMovie extends Movie {
  constructor(id, title) {
    super(id, title, "children");
  }

  getBillForRental(days) {
    let bill = 1.5;
    if (days > 3) {
      bill += (days - 3) * 1.5;
    }
    return bill;
  }
}

class NewMovie extends Movie {
  constructor(id, title) {
    super(id, title, "new");
  }

  getBillForRental(days) {
    return days * 3;
  }
}

class RegularMovie extends Movie {
  constructor(id, title) {
    super(id, title, "regular");
  }

  getBillForRental(days) {
    let bill = 2;
    if (days > 2) {
      bill += (days - 2) * 1.5;
    }
    return bill;
  }
}

function createMovie(id, title, code) {
  if (code == "new") return new NewMovie(id, title);
  if (code == "regular") return new RegularMovie(id, title);
  if (code == "children") return new ChildrenMovie(id, title);
}

module.exports = { createMovie, NewMovie };
