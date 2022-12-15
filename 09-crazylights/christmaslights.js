// This solution works as well, but in local, not in the website
function countTime(leds = []) {
  if (leds[0] === 0 && leds[leds.length - 1] === 1 && leds[1] === 1) leds[0] = 1;

  const hasZeros = new RegExp('0+');
  const tens = new RegExp('10', 'g');
  const noway = new RegExp('^(0+1+)$');

  let ledstring = leds.join('');
  let total = 0;

  while (hasZeros.test(ledstring)) {
    ledstring = noway.test(ledstring) ? ledstring.replace('0', '1') : ledstring.replace(tens, '11');
    total += 7;
  }

  return total;
}

// Score: 10
// function countTime(leds = []) {
//   if (leds[0] === 0 && leds[leds.length - 1] === 1 && leds[1] === 1) leds[0] = 1;

//   let total = 0;

//   while (leds.some((led) => led === 0)) {
//     let lastzeroi = leds.lastIndexOf(0);
//     if (leds[0] !== 1 && leds[lastzeroi + 1] === 1 && leds[lastzeroi - 1] === 0) {
//       leds[0] = 1;
//     } else {
//       leds = leds.map((led, i, array) => (array[i - 1] === 1 ? 1 : led));
//     }

//     total += 7;
//   }

//   return total;
// }

console.log(countTime([1, 1, 1, 1, 1])); // 0
console.log(countTime([1, 1, 1, 0, 1])); // 7
console.log(countTime([0, 1, 1, 0, 1])); // 7
console.log(countTime([0, 0, 1])); // 14
console.log(countTime([1, 0])); // 7
console.log(countTime([0, 0, 0, 1])); // 21
// [0, 0, 0, 1] 0
// [1, 0, 0, 1] 7
// [1, 1, 0, 1] 14
// [1, 1, 1, 1] 21

console.log(countTime([0, 0, 1, 0, 0])); // 28
// [0, 0, 1, 0, 0] 0
// [0, 0, 1, 1, 0] 7
// [0, 0, 1, 1, 1] 14
// [1, 0, 1, 1, 1] 21
// [1, 1, 1, 1, 1] 28

console.log(countTime([1, 0, 0, 1, 0, 0])); // 14
// [1, 0, 0, 1, 0, 0] 0
// [1, 1, 0, 1, 1, 0] 7
// [1, 1, 1, 1, 1, 1] 14

console.log(countTime([1, 1, 1])); // 0
console.log(countTime([1, 1, 0, 0, 0, 0])); // 28
// [1, 1, 0, 0, 0, 0] 0
// [1, 1, 1, 0, 0, 0] 7
// [1, 1, 1, 1, 0, 0] 14
// [1, 1, 1, 1, 1, 0] 21
// [1, 1, 1, 1, 1, 1] 28

console.log(countTime([1])); // 0
console.log(countTime([0, 1])); // 7
