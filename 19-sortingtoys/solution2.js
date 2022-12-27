// Score: 260
function sortToys(toys = [], positions = []) {
  const result = new Array(...toys);
  const arraySize = positions.some((pos) => pos === 0) ? 0 : Math.min(...positions);

  toys.forEach((element, index) => {
    result[positions[index] - arraySize] = element;
  });

  return result;
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

console.log(
  sortToys(
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
    [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]
  )
);
