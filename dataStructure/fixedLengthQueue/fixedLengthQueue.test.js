const FixedLengthQueue = require("./fixedLengthQueue");

describe("FixedLengthQueue", () => {
  describe("getSize", () => {
    it("should create an array of length when the length parameter is passed in", () => {
      const fixedQueue = new FixedLengthQueue(3);
      expect(fixedQueue.getSize()).toBe(3);
    });
  });

  describe("enqueue", () => {
    it("should add item into the fixedQueue", () => {
      const fixedQueue = new FixedLengthQueue(3);
      expect(fixedQueue.enqueue("A")).toEqual(["A", undefined, undefined]);
    });

    it("should add item into the fixedQueue in order", () => {
      const fixedQueue = new FixedLengthQueue(3);
      expect(fixedQueue.enqueue("A")).toEqual(["A", undefined, undefined]);
      expect(fixedQueue.enqueue("B")).toEqual(["A", "B", undefined]);
      expect(fixedQueue.enqueue("C")).toEqual(["A", "B", "C"]);
    });

    it("should throw an error when adding an item while fixedQueue is full", () => {
      const fixedQueue = new FixedLengthQueue(2);
      fixedQueue.enqueue("A");
      fixedQueue.enqueue("B");
      expect(() => fixedQueue.enqueue("C")).toThrow(Error);
    });
  });

  describe("dequeue", () => {
    it("should be able to enqueue and dequeue", () => {
      const fixedQueue = new FixedLengthQueue(2);
      fixedQueue.enqueue("A");
      expect(fixedQueue.dequeue()).toBe("A");
    });

    it("should be able to enqueue and dequeue in order", () => {
      const fixedQueue = new FixedLengthQueue(2);
      fixedQueue.enqueue("A");
      fixedQueue.enqueue("B");
      expect(fixedQueue.dequeue()).toBe("A");
      expect(fixedQueue.dequeue()).toBe("B");
      expect(fixedQueue.dequeue()).toBe(undefined);
    });

    it("should not be able to insert item more than the max length even after dequeue", () => {
      const fixedQueue = new FixedLengthQueue(2);
      fixedQueue.enqueue("A");
      fixedQueue.enqueue("B");
      fixedQueue.dequeue();
      expect(() => fixedQueue.enqueue("C")).toThrow(Error);
    });
  });

  describe("peek", () => {
    it("should be able to peek at the first real item in the queue", () => {
      const fixedQueue = new FixedLengthQueue(2);
      expect(fixedQueue.peek()).toBe(undefined);
      fixedQueue.enqueue("A");
      fixedQueue.enqueue("B");
      expect(fixedQueue.peek()).toEqual("A");
      expect(fixedQueue.dequeue()).toEqual("A");
      expect(fixedQueue.peek()).toEqual("B");
    });

    it("can peek correctly after dequeue", () => {
      const fixedQueue = new FixedLengthQueue(3);

      expect(fixedQueue.dequeue()).toEqual(undefined);
      expect(fixedQueue.peek()).toEqual(undefined);

      fixedQueue.enqueue("apple");
      expect(fixedQueue.peek()).toEqual("apple");
      expect(fixedQueue.dequeue()).toEqual("apple");
      expect(fixedQueue.peek()).toEqual(undefined);
      expect(fixedQueue.dequeue()).toEqual(undefined);

      fixedQueue.enqueue("banana");
      expect(fixedQueue.peek()).toEqual("banana");
      expect(fixedQueue.dequeue()).toEqual("banana");
      expect(fixedQueue.peek()).toEqual(undefined);
      expect(fixedQueue.dequeue()).toEqual(undefined);

      fixedQueue.enqueue("citrus");
      expect(fixedQueue.peek()).toEqual("citrus");
      expect(fixedQueue.dequeue()).toEqual("citrus");
      expect(fixedQueue.peek()).toEqual(undefined);
      expect(fixedQueue.dequeue()).toEqual(undefined);
    });
  });
});
