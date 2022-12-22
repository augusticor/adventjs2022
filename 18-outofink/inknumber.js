// Score: 80
function dryNumber(dry = 1, numbers = 15) {
  const noInkNums = [];

  while (numbers > 0) {
    if (numbers.toString().indexOf(dry) > -1) noInkNums.unshift(numbers);
    numbers -= 1;
  }

  return noInkNums;
}

// TESTS
console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]

console.log(dryNumber(2, 20)); // [2, 12, 20]

console.log(dryNumber(2, 34)); // [2, 12, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32]

console.log(dryNumber(3, 43)); // [3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43]

console.log(dryNumber(5, 55)); // [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55]

console.log(dryNumber(0, 20)); // [0, 10, 20]

console.log(dryNumber(9, 20)); // [9, 19]
