const Stack = require("./Stack");

describe("Stack", () => {
  describe("push", () => {
    it("should add item into the stack", () => {
      const stack = new Stack();
      expect(stack.push("Alice")).toEqual(["Alice"]);
    });

    it("should add item into the stack in order", () => {
      const stack = new Stack();
      expect(stack.push("Alice")).toEqual(["Alice"]);
      expect(stack.push("Bob")).toEqual(["Alice", "Bob"]);
      expect(stack.push("Charlie")).toEqual(["Alice", "Bob", "Charlie"]);
    });
  });

  describe("pop", () => {
    it("should push an item and pop an item", () => {
      const stack = new Stack();
      stack.push("Alice");
      expect(stack.pop()).toBe("Alice");
      expect(stack.pop()).toBe(undefined);
    });

    it("should pop the last item in order", () => {
      const stack = new Stack();
      stack.push("Alice");
      stack.push("Bob");
      expect(stack.pop()).toBe("Bob");
      expect(stack.pop()).toBe("Alice");
      expect(stack.pop()).toBe(undefined);
    });
  });

  describe("peek", () => {
    it("should be able to peek at the last item in the stack", () => {
      const stack = new Stack();
      stack.push("Alice");
      stack.push("Bob");
      expect(stack.peek()).toBe("Bob");
    });

    it("should ", () => {});
  });

  it("should be able to peek at the last item in the stack, even during push and pop", () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
    stack.push("Alice");
    expect(stack.peek()).toBe("Alice");
    stack.push("Bob");
    expect(stack.peek()).toBe("Bob");
    stack.pop();
    expect(stack.peek()).toBe("Alice");
  });
});
