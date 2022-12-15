// Score: 140 breaking lines
function getCompleted(part = '', total = '') {
  let [hoursp, minutesp, secondsp] = part
    .split(':')
    .map((num) => parseInt(num));
  hoursp *= 3600;
  minutesp *= 60;

  let [hourst, minutest, secondst] = total
    .split(':')
    .map((num) => parseInt(num));

  hourst *= 3600;
  minutest *= 60;

  const partTimeInSeconds = hoursp + minutesp + secondsp;
  const totalTimeInSeconds = hourst + minutest + secondst;

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
