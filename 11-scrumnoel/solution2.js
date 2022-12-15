// Score: 90 reduce one line or 140 reduce in multiple line
function getCompleted(part = '', total = '') {
  const partTimeInSeconds = part
    .split(':')
    .reduce((acc, num, index, array) => acc + num * Math.pow(60, array.length - 1 - index), 0);

  const totalTimeInSeconds = total
    .split(':')
    .reduce((acc, num, index, array) => acc + num * Math.pow(60, array.length - 1 - index), 0);

  // Loop to find greatest common divisor
  let num1 = partTimeInSeconds;
  let num2 = totalTimeInSeconds;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return `${partTimeInSeconds / num1}/${totalTimeInSeconds / num1}`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')); // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')); // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')); // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')); // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')); // '3/5
