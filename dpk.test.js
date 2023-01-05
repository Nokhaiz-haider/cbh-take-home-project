const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("should return the partition key if it is provided in the event object", () => {
    const event = { partitionKey: "123" };
    expect(deterministicPartitionKey(event)).toBe("123");
  });

  test("should return a SHA3-512 hash of the event data if the partition key is not provided", () => {
    const event = { foo: "bar" };
    expect(deterministicPartitionKey(event)).toMatch(/^[a-f0-9]{128}$/);
  });

  test("should return the trivial partition key if no event is provided", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  test("should return a SHA3-512 hash if the partition key is longer than 256 characters", () => {
    const event = { partitionKey: "a".repeat(300) };
    expect(deterministicPartitionKey(event)).toMatch(/^[a-f0-9]{128}$/);
  });
});
