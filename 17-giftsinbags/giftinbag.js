// Score: 100
function carryGifts(gifts = [], maxWeight = 1) {
  if (!gifts.every((gift) => gift.length <= maxWeight)) return [];

  let bag = '';
  const packed = [];
  let spaces = 0;

  gifts.forEach((gift) => {
    if (bag.length + gift.length - spaces <= maxWeight) {
      bag += gift + ' ';
      spaces++;
    } else {
      packed.push(bag.trimEnd());
      bag = gift + ' ';
      spaces = 1;
    }
  });

  if (bag.length > 0) packed.push(bag.trimEnd());

  return packed;
}

// TESTS
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
// ['game bike', 'book toy']

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
// ['game', 'bike', 'book toy']

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
// ['game', 'bike', 'book', 'toy']

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// ['toy', 'gamme', 'toy', 'bike']

console.log(carryGifts(['to', 'ga', 'to', 'bi'], 8));
// [ 'to ga to bi' ]

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 2));
// [ 'to ga to bi' ]
