const crypto = require("crypto");

const deterministicPartitionKey = (event) => {
  // Trivial partition key to return if no event object is provided
  const trivialPartitionKey = "0";

  // Maximum length of the partition key
  const maxPartitionKeyLength = 256;

  // Initialize candidate partition key
  let candidate;

  if (event) {
    // If the event object has a partition key, use it as the candidate
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      // Otherwise, generate a SHA3-512 hash of the event data as the candidate
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  // If the candidate is not a string, stringify it
  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  // If no candidate has been set, use the trivial partition key
  if (!candidate) {
    candidate = trivialPartitionKey;
  }

  // If the candidate is longer than the maximum length, generate a SHA3-512 hash of it
  if (candidate.length > maxPartitionKeyLength) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

module.exports = { deterministicPartitionKey };
