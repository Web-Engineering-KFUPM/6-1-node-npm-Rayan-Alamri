
export function add(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.slice(1).reduce((difference, number) => difference - number, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((product, number) => product * number, 1);
}

export function divide(numbers) {
  if (numbers.length === 0) {
    return NaN;
  }

  return numbers.slice(1).reduce((quotient, number) => {
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }

    return quotient / number;
  }, numbers[0]);
}

