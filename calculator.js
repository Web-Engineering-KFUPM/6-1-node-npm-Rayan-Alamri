import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";

function printUsage() {
  console.log("Usage: node calculator.js <operation> <numbers...>");
  console.log("Operations: add, subtract, multiply, divide");
}

function validateOperation(operation) {
  if (!operation) {
    printUsage();
    process.exit(1);
  }

  if (!isValidOperation(operation)) {
    console.log("Invalid operation. Use: add, subtract, multiply, or divide");
    process.exit(1);
  }
}

function validateNumbers(operation, rawNumbers, parsedNumbers) {
  if (rawNumbers.length === 0) {
    console.log("Please provide at least one number.");
    process.exit(1);
  }

  if (parsedNumbers.length !== rawNumbers.length) {
    console.log("Please ensure all provided values are valid numbers.");
    process.exit(1);
  }

  const needsTwoArgs = ["subtract", "divide"];
  if (needsTwoArgs.includes(operation) && parsedNumbers.length < 2) {
    console.log(`The "${operation}" operation requires at least two numbers.`);
    process.exit(1);
  }
}

function performOperation(operation, numbers) {
  switch (operation) {
    case "add":
      return add(numbers);
    case "subtract":
      return subtract(numbers);
    case "multiply":
      return multiply(numbers);
    case "divide":
      return divide(numbers);
    default:
      throw new Error("Unknown operation");
  }
}

function main() {
  const [, , operation, ...rawNumbers] = process.argv;

  validateOperation(operation);

  const numbers = parseNumbers(rawNumbers);
  validateNumbers(operation, rawNumbers, numbers);

  try {
    const result = performOperation(operation, numbers);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
