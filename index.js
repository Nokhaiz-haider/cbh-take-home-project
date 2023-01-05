const { deterministicPartitionKey } = require("./dpk");
const events = {
  partition: 23,
};
console.log(deterministicPartitionKey(events));
