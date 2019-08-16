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
      expect(queue.dequeue()).toBe("Alice");
      expect(queue.dequeue()).toBe(undefined);
    });

    it("should enqueue and dequeue and maintain the order", () => {
      const queue = new Queue();
      queue.enqueue("Alice");
      queue.enqueue("Bob");
      queue.enqueue("Charlie");
      expect(queue.dequeue()).toBe("Alice");
      expect(queue.dequeue()).toBe("Bob");
      expect(queue.dequeue()).toBe("Charlie");
      expect(queue.dequeue()).toBe(undefined);
    });
  });

  describe("peek", () => {
    it("should return the first item in the queue", () => {
      const queue = new Queue();
      queue.enqueue("Alice");
      expect(queue.peek()).toBe("Alice");
    });

    it("should not remove the first item in the queue", () => {
      const queue = new Queue();
      expect(queue.peek()).toBeUndefined();
      queue.enqueue("Alice");
      expect(queue.peek()).toBe("Alice");
      queue.enqueue("Bob");
      expect(queue.peek()).toBe("Alice");
    });
  });
});
