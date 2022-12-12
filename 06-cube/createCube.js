// Build cube from outside to inside using recursion
// Score: 10
function createCube(size = 1) {
  const aboveBaseCase = '_\\'.repeat(size);
  const belowBaseCase = '_/'.repeat(size);

  const buildCube = (level) => {
    if (level < size) {
      let space = ' '.repeat(size - level);
      return space + '/\\'.repeat(level) + aboveBaseCase + '\n' + buildCube(level + 1) + '\n' + space + '\\/'.repeat(level) + belowBaseCase;
    }

    return '/\\'.repeat(size) + aboveBaseCase + '\n' + '\\/'.repeat(size) + belowBaseCase;
  };

  return buildCube(1);
}

console.log(createCube(1));
console.log(createCube(2));
console.log(createCube(3));
console.log(createCube(4));
