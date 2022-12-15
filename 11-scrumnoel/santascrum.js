// Score: 10
function getCompleted(part = '', total = '') {
  const partTimeInSeconds = part
    .split(':')
    .reduce((acc, num, index, array) => acc + num * Math.pow(60, array.length - 1 - index), 0);

  const totalTimeInSeconds = total
    .split(':')
    .reduce((acc, num, index, array) => acc + num * Math.pow(60, array.length - 1 - index), 0);

  // Recursive function to find greatest common divisor
  const euclideanGCD = (a, b) => {
    if (a === 0) return b;

    return euclideanGCD(b % a, a);
  };

  const gcd = euclideanGCD(partTimeInSeconds, totalTimeInSeconds);

  return `${partTimeInSeconds / gcd}/${totalTimeInSeconds / gcd}`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')); // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')); // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')); // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')); // '3/5
