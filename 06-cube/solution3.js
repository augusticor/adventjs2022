// Build cube from outside to inside using while loop
// Score: 160
function createCube(size = 1) {
  const aboveBaseCase = '_\\'.repeat(size) + '\n';
  const belowBaseCase = '_/'.repeat(size) + '\n';
  const originalSize = size;

  let cube = '';
  while (size > 0) {
    let space = ' '.repeat(originalSize - size);
    let above = space + '/\\'.repeat(size) + aboveBaseCase;
    let below = space + '\\/'.repeat(size) + belowBaseCase;

    cube = `${above}${cube}${below}`;
    size--;
  }

  return cube.trimEnd();
}

// console.log(createCube(1));
console.log(createCube(2));
// console.log(createCube(3));
console.log(createCube(4));
