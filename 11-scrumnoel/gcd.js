const greatestCommonDivisor = (num1 = 1, num2 = 1) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

const euclideanGCD = (a, b) => {
  if (a === 0) return b;

  return euclideanGCD(b % a, a);
};

console.time('gcd');
console.log(greatestCommonDivisor(4, 8)); // 4
console.log(greatestCommonDivisor(7, 24)); // 1
console.log(greatestCommonDivisor(24, 18)); // 6
console.log(greatestCommonDivisor(36, 60)); // 12
console.log(greatestCommonDivisor(0, 0)); // 0
console.log(greatestCommonDivisor(3600, 10800)); // 3600
console.log(greatestCommonDivisor(216, 234)); // 18
console.timeEnd('gcd');

console.time('euc');
console.log(euclideanGCD(4, 8)); // 4
console.log(euclideanGCD(7, 24)); // 1
console.log(euclideanGCD(24, 18)); // 6
console.log(euclideanGCD(36, 60)); // 12
console.log(euclideanGCD(0, 0)); // 0
console.log(euclideanGCD(3600, 10800)); // 3600
console.log(euclideanGCD(216, 234)); // 18
console.timeEnd('euc');
