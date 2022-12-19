// Score: 100
function getOptimalPath(path = [[]]) {
  const finalPaths = new Set();

  const searchPaths = (row, column, sum) => {
    if (!path[row]) {
      finalPaths.add(sum);
    } else {
      let root = path[row][column];
      // left element
      searchPaths(row + 1, column, sum + root);

      // right element
      searchPaths(row + 1, column + 1, sum + root);
    }
  };

  searchPaths(0, 0, 0);
  return Math.min(...finalPaths);
}

// TESTS
console.log(getOptimalPath([[0], [2, 3]])); // 2
/*
[
  [0]
  [2, 3]
]

  0
 / \
2   3
*/

console.log(getOptimalPath([[0], [7, 4], [2, 4, 6]])); // 2
/*
[
  [0],
  [7, 4],
  [2, 4, 6]
]

    0
   / \
  7   4
 / \ / \
2   4   6
*/

console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); // 5
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // 8
