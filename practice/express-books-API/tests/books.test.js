const app = require("../app");
const request = require("supertest");
const { books } = require("../data/db.json");

const route = (params = "") => {
  const path = "/books";
  return `${path}/${params}`;
};

describe("Route /books", () => {
  describe("GET", () => {
    it("/books should return all the books in the database", async () => {
      const response = await request(app).get(route());
      expect(response.status).toBe(200);
      expect(response.body).toEqual(books);
      expect(response.body.length).toBe(6);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/books/?title=1984 should return a book matching the title query", async () => {
      const response = await request(app)
        .get(route())
        .query({ title: "1984" });
      expect(response.body).toEqual([
        { id: "2", title: "1984", author: "George Orwell" }
      ]);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    it("/books/?author=George Orwell should return books matching the author query", async () => {
      const response = await request(app)
        .get(route())
        .query({ author: "George Orwell" });
      expect(response.body).toEqual([
        { id: "1", title: "Animal Farm", author: "George Orwell" },
        { id: "2", title: "1984", author: "George Orwell" },
        { id: "3", title: "Homage to Catalonia", author: "George Orwell" },
        { id: "4", title: "The Road to Wigan Pier", author: "George Orwell" }
      ]);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });
  });

  describe("POST", () => {
    it("/books should add a book object to database", async () => {
      const requestBody = { title: "test title", author: "test author" };
      const responseBody = {
        id: expect.any(String),
        title: "test title",
        author: "test author"
      };
      const response = await request(app)
        .post(route())
        .send(requestBody);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(responseBody);
      expect(books[books.length - 1]).toEqual(responseBody);
    });
  });

  describe("DELETE", () => {
    it("/books/:id should return delete the book from database and return the deleted book ", async () => {
      const responseBody = {
        id: "1",
        title: "Animal Farm",
        author: "George Orwell"
      };
      const response = await request(app).delete(route(1));
      expect(response.body).toEqual(responseBody);
      expect(response.status).toBe(200);
      expect(books.length).toBe(6);
    });

    it("/books/:id should return 404 if book id does not exist", async () => {
      const response = await request(app).delete(route(100));
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        message: "Unable to find book with id: 100"
      });
      expect(books.length).toBe(6);
    });
  });
});
