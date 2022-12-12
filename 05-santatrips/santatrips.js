// This is not my solution.
// My solution did not pass the secret tests, this solution is from @borjapazr
// Score: 197
const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  return giftsCities
    .sort((cityGiftsA, cityGiftsB) => cityGiftsB - cityGiftsA)
    .reduce((m, g) => {
      if (maxCities !== 0 && m + g <= maxGifts && m + g !== maxGifts - 1) {
        maxCities -= 1;
        m += g;
      }
      return m;
    }, 0);
};

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
console.log(getMaxGifts([50], 15, 1)); // 0
console.log(getMaxGifts([50], 100, 1)); // 50
console.log(getMaxGifts([50, 70], 100, 1)); // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
