const Queue = require("./queue");

describe("Queue", () => {
  describe("enqueue", () => {
    it("should add person into the queue", () => {
      const queue = new Queue();
      expect(queue.enqueue("Alice")).toEqual(["Alice"]);
    });

    it("should add person into the queue in order", () => {
      const queue = new Queue();
      expect(queue.enqueue("Alice")).toEqual(["Alice"]);
      expect(queue.enqueue("Bob")).toEqual(["Alice", "Bob"]);
      expect(queue.enqueue("Charlie")).toEqual(["Alice", "Bob", "Charlie"]);
    });
  });

  describe("dequeue", () => {
    it("should enqueue and dequeue a person", () => {
      const queue = new Queue();
      expect(queue.enqueue("Alice")).toEqual(["Alice"]);
      expect(queue.dequeue()).toEqual("Alice");
      expect(queue.dequeue()).toEqual(undefined);
    });

    it("should enqueue and dequeue and maintain the order", () => {
      const queue = new Queue();
      queue.enqueue("Alice");
      queue.enqueue("Bob");
      queue.enqueue("Charlie");
      expect(queue.dequeue()).toEqual("Alice");
      expect(queue.dequeue()).toEqual("Bob");
      expect(queue.dequeue()).toEqual("Charlie");
      expect(queue.dequeue()).toEqual(undefined);
    });
  });

  describe("peek", () => {
    it("should return the first item in the queue", () => {
      const queue = new Queue();
      queue.enqueue("Alice");
      expect(queue.peek()).toEqual("Alice");
    });

    it("should not remove the first item in the queue", () => {
      const queue = new Queue();
      expect(queue.peek()).toBeUndefined();
      queue.enqueue("Alice");
      expect(queue.peek()).toEqual("Alice");
      queue.enqueue("Bob");
      expect(queue.peek()).toEqual("Alice");
    });
  });
});
