const mummify = require("./mummifier");

describe("Mummifier", () => {
  it("should not mummify empty string", () => {
    expect(mummify("")).toBe("");
  });

  it("should not mummify words with no vowels", () => {
    expect(mummify("str")).toBe("str");
  });

  it("should mummify a vowel", () => {
    expect(mummify("a")).toBe("mummy");
  });

  it("should mummify consonents and a vowel", () => {
    expect(mummify("bla")).toBe("blmummy");
  });

  it("should not mummify less than 30 percent vowels", () => {
    expect(mummify("blah")).toBe("blah");
  });

  it("should mummify capital vowels", () => {
    expect(mummify("blAhe")).toBe("blmummyhmummy");
  });

  it("should mummify continuous vowels only once", () => {
    expect(mummify("hear")).toBe("hmummyr");
  });

  it("should mummify multiple sets of vowels", () => {
    expect(mummify("blaaha")).toBe("blmummyhmummy");
  });

  test("should throw exception if input is not string", () => {
    const t = () => {
      mummify(2);
    };
    expect(t).toThrow(TypeError);
  });
});
