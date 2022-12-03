// Score: 142
const distributeGifts = (packOfGifts = [], reindeers = []) => {
  const giftsWeight = packOfGifts.reduce((weight, gift) => weight + gift.length, 0);

  const deersCarryingCapacity = reindeers.reduce((capacity, deer) => capacity + deer.length * 2, 0);

  return Math.floor(deersCarryingCapacity / giftsWeight);
};

// TESTS
const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
console.log(distributeGifts(packOfGifts, reindeers)); //2
