// Score: Score changes depending of the (enters) in the code max 200
function getGiftsToRefill(a1 = [], a2 = [], a3 = []) {
  const superset = new Set(a1.concat(a2).concat(a3));
  return [...superset].filter(
    (element) => a1.includes(element) + a2.includes(element) + a3.includes(element) === 1
  );
}

// TESTS

console.log(
  getGiftsToRefill(
    ['bici', 'coche', 'bici', 'bici'],
    ['coche', 'bici', 'muñeca', 'coche'],
    ['bici', 'pc', 'pc']
  )
); // ['muñeca', 'pc']
console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']));
