function countTime(leds = []) {
  if (leds[0] === 0 && leds[leds.length - 1] === 1 && leds[1] === 1) leds[0] = 1;

  const hasZeros = new RegExp('0+');
  const tens = new RegExp('10', 'g');
  const noway = new RegExp('^(0+1+)$');

  let ledstring = leds.join('');
  let total = 0;

  while (hasZeros.test(ledstring)) {
    if (noway.test(ledstring)) {
      ledstring = ledstring.replace('0', '1');
    } else {
      ledstring = ledstring.replace(tens, '11');
    }

    total += 7;
  }

  return total;
}

console.log(countTime([1])); // 0
console.log(countTime([0, 1])); // 7

console.log(countTime([0, 0, 1])); // 14
console.log(countTime([1, 0])); // 7
console.log(countTime([1, 1, 1, 1, 1])); // 0
console.log(countTime([1, 1, 1, 0, 1])); // 7
console.log(countTime([0, 1, 1, 0, 1])); // 7
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
