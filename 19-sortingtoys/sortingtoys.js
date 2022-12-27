// Score: 300
function sortToys(toys = [], positions = []) {
  const result = {};

  positions.reduce((prev, curr, index) => (result[curr] = toys[index]), result);

  return Object.values(result);
}

// TESTS
const toys = ['ball', 'doll', 'car', 'puzzle'];
const positions = [2, 3, 1, 0];

console.log(sortToys(toys, positions));
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo'];
const morePositions = [8, 6, 5, 7, 9];

console.log(sortToys(moreToys, morePositions));
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
