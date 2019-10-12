const HashTable = require("./hashTable");

beforeEach(() => {
  return (myHashTable = new HashTable(2));
});

describe("Array", () => {
  it("should add item into an hash-table", () => {
    expect(myHashTable.set("grapes", 100)).toEqual([
      undefined,
      [["grapes", 100]]
    ]);
  });

  it("should add item into an hash-table", () => {
    myHashTable.set("grapes", 100);
    myHashTable.set("apples", 10);
    expect(myHashTable.data).toEqual([
      undefined,
      [["grapes", 100], ["apples", 10]]
    ]);
  });

  it("should return value of apples key", () => {
    myHashTable.set("grapes", 100);
    myHashTable.set("apples", 10);
    expect(myHashTable.get("apples")).toBe(10);
  });
});
