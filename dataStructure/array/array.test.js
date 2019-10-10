const NewArray = require("./array");

beforeEach(() => {
  return (myArray = new NewArray());
});

describe("Array", () => {
  describe("Push", () => {
    it("should add item into an array when pushed", () => {
      expect(myArray.push("hi")).toEqual({ "0": "hi" });
    });

    it("should add another item into an array when pushed", () => {
      myArray.push("hi");
      expect(myArray.push("there")).toEqual({ "0": "hi", "1": "there" });
    });
  });

  describe("Pop", () => {
    it("should pop the last item", () => {
      myArray.push("hi");
      myArray.push("there");
      myArray.push("hello");
      expect(myArray.pop()).toEqual("hello");
      expect(myArray).toEqual({ length: 2, data: { "0": "hi", "1": "there" } });
      expect(myArray.pop()).toEqual("there");
      expect(myArray).toEqual({ length: 1, data: { "0": "hi" } });
    });
  });

  describe("Delete", () => {
    it("should delete item at indicated index", () => {
      myArray.push("hi");
      myArray.push("hello");
      myArray.push("there");
      expect(myArray.deleteAtIndex(1)).toEqual("hello");
      expect(myArray).toEqual({ length: 2, data: { "0": "hi", "1": "there" } });
    });
  });
});
