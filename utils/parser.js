import _ from "lodash";

export function parseNumbers(input) {
  const wrapped = _.map(input, (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? { value: parsed } : null;
  });

  return _.map(_.compact(wrapped), "value");
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}

