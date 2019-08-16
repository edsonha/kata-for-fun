const CircularQueue = require("./circularQueue");

describe("Circular Queue", () => {
  describe("getSize", () => {
    it("should create an array of length when the length parameter is passed in", () => {
      const circularQueue = new CircularQueue(3);
      expect(circularQueue.getSize()).toBe(3);
    });
  });

  describe("enqueue", () => {
    it("should add item into the circularQueue", () => {
      const circularQueue = new CircularQueue(3);
      expect(circularQueue.enqueue("A")).toEqual(["A", undefined, undefined]);
    });

    it("should add item into the circularQueue in order", () => {
      const circularQueue = new CircularQueue(3);
      expect(circularQueue.enqueue("A")).toEqual(["A", undefined, undefined]);
      expect(circularQueue.enqueue("B")).toEqual(["A", "B", undefined]);
      expect(circularQueue.enqueue("C")).toEqual(["A", "B", "C"]);
    });

    it("should throw an error when adding an item while circularQueue is full", () => {
      const circularQueue = new CircularQueue(2);
      circularQueue.enqueue("A");
      circularQueue.enqueue("B");
      expect(() => circularQueue.enqueue("C")).toThrowError(
        "max length reached"
      );
    });

    it("cannot enqueue undefined", () => {
      const circularQueue = new CircularQueue(2);
      expect(() => circularQueue.enqueue(undefined)).toThrowError(
        "enqueue item cannot be undefined"
      );
      expect(circularQueue.getSize()).toEqual(2);
    });
  });

  describe("dequeue", () => {
    it("should be able to enqueue and dequeue", () => {
      const circularQueue = new CircularQueue(2);
      circularQueue.enqueue("A");
      expect(circularQueue.dequeue()).toBe("A");
    });

    it("should be able to enqueue and dequeue in order", () => {
      const circularQueue = new CircularQueue(3);
      circularQueue.enqueue("A");
      circularQueue.enqueue("B");
      circularQueue.enqueue("C");
      expect(circularQueue.dequeue()).toBe("A");
      expect(circularQueue.dequeue()).toBe("B");
      expect(circularQueue.dequeue()).toBe("C");
      expect(() => circularQueue.dequeue()).toThrowError("no item in queue");
    });

    it("should be able to enqueue more than length of queue after some item dequeed", () => {
      const circularQueue = new CircularQueue(1);
      circularQueue.enqueue("A");
      circularQueue.dequeue();
      expect(() => circularQueue.enqueue("B")).not.toThrowError(
        "max length reached"
      );
      expect(circularQueue.dequeue()).toBe("B");
      expect(circularQueue.getSize()).toBe(1);
    });
  });

  describe("peek", () => {
    it("should be able to peek on next item", () => {
      const circularQueue = new CircularQueue(2);
      circularQueue.enqueue("A");
      expect(circularQueue.peek()).toBe("A");
      circularQueue.enqueue("B");
      expect(circularQueue.peek()).toBe("A");
      expect(circularQueue.getSize()).toBe(2);
    });

    it("should be able to peek the correct item after dequeue", () => {
      const circularQueue = new CircularQueue(3);
      expect(circularQueue.peek()).toBe(undefined);
      expect(() => circularQueue.dequeue()).toThrowError("no item in queue");
      circularQueue.enqueue("A");
      circularQueue.enqueue("B");
      circularQueue.enqueue("C");
      expect(circularQueue.peek()).toBe("A");
      expect(circularQueue.dequeue()).toBe("A");
      expect(circularQueue.peek()).toEqual("B");
      expect(circularQueue.dequeue()).toEqual("B");
      expect(circularQueue.peek()).toEqual("C");
      expect(circularQueue.dequeue()).toEqual("C");
      expect(() => circularQueue.dequeue()).toThrowError("no item in queue");
      expect(circularQueue.peek()).toEqual(undefined);
      expect(circularQueue.getSize()).toEqual(3);
    });

    it("should be able to peek the correct item after enqueue and dequeue ", () => {
      const circularQueue = new CircularQueue(2);
      circularQueue.enqueue("A");
      circularQueue.enqueue("B");
      expect(circularQueue.dequeue()).toBe("A");
      expect(circularQueue.peek()).toBe("B");
      circularQueue.enqueue("C");
      expect(() => circularQueue.enqueue("Z")).toThrowError(
        "max length reached"
      );
      expect(circularQueue.peek()).toBe("B");
      expect(circularQueue.dequeue()).toBe("B");
      expect(circularQueue.peek()).toBe("C");
      expect(circularQueue.getSize()).toEqual(2);
    });
  });
});
