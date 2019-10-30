const { PriorityQueue, QueueElement } = require("./priorityQueue");

describe("Priority Queue", () => {
  describe("enqueue", () => {
    it("should add person into the queue", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      expect(priorityQueue.printQueue()).toEqual("Alice ");
    });

    it("should add people into the queue in order of importance with 1 is the highest priority and maintain order", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      priorityQueue.enqueue("Charlie", 3);
      expect(priorityQueue.printQueue()).toBe("Alice Charlie ");
      priorityQueue.enqueue("Bob", 2);
      expect(priorityQueue.printQueue()).toBe("Alice Bob Charlie ");
      priorityQueue.enqueue("Bill", 2);
      expect(priorityQueue.printQueue()).toBe("Alice Bob Bill Charlie ");
      priorityQueue.enqueue("Cob", 3);
      expect(priorityQueue.printQueue()).toBe("Alice Bob Bill Charlie Cob ");
    });
  });

  describe("dequeue", () => {
    it("should enqueue and dequeue a person", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      priorityQueue.enqueue("Charlie", 3);
      expect(priorityQueue.dequeue().name).toBe("Alice");
      expect(priorityQueue.dequeue().name).toBe("Charlie");
      expect(priorityQueue.dequeue()).toBe(undefined);
    });

    it("should enqueue and dequeue and maintain the order", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      priorityQueue.enqueue("Charlie", 3);
      priorityQueue.enqueue("Bob", 2);
      priorityQueue.enqueue("Bill", 2);
      expect(priorityQueue.dequeue().name).toBe("Alice");
      expect(priorityQueue.dequeue().name).toBe("Bob");
      expect(priorityQueue.dequeue().name).toBe("Bill");
      expect(priorityQueue.dequeue().name).toBe("Charlie");
      expect(priorityQueue.dequeue()).toBe(undefined);
    });
  });

  describe("peek front", () => {
    it("should return the first item in the queue", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      priorityQueue.enqueue("Charlie", 3);
      expect(priorityQueue.peekFront().name).toBe("Alice");
    });

    it("should not remove the first item in the queue", () => {
      const priorityQueue = new PriorityQueue();
      expect(priorityQueue.peekFront()).toBe(undefined);
      priorityQueue.enqueue("Alice", 1);
      expect(priorityQueue.peekFront().name).toBe("Alice");
      priorityQueue.enqueue("Charlie", 3);
      expect(priorityQueue.peekFront().name).toBe("Alice");
    });
  });

  describe("peek back", () => {
    it("should return the last item in the queue", () => {
      const priorityQueue = new PriorityQueue();
      priorityQueue.enqueue("Alice", 1);
      priorityQueue.enqueue("Charlie", 3);
      expect(priorityQueue.peekBack().name).toBe("Charlie");
    });

    it("should not remove the last item in the queue", () => {
      const priorityQueue = new PriorityQueue();
      expect(priorityQueue.peekBack()).toBe(undefined);
      priorityQueue.enqueue("Alice", 1);
      expect(priorityQueue.peekBack().name).toBe("Alice");
      priorityQueue.enqueue("Amy", 1);
      expect(priorityQueue.peekBack().name).toBe("Amy");
      expect(priorityQueue.printQueue()).toBe("Alice Amy ");
    });
  });
});
