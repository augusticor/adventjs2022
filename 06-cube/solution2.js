// Build above part of cube and then reverse it
// Score: 10
function createCube(size = 1) {
  const aboveBaseCase = '_\\'.repeat(size);

  const buildCube = (level) => {
    let space = ' '.repeat(size - level);
    if (level > 1) {
      return buildCube(level - 1) + '\n' + space + '/\\'.repeat(level) + aboveBaseCase;
    }

    return space + '/\\'.repeat(level) + aboveBaseCase;
  };

  const aboveCube = buildCube(size);
  const belowCube = aboveCube.split('\n').reverse().join('\n').replaceAll('_\\', '_/').replaceAll('/\\', '\\/');

  return aboveCube + '\n' + belowCube;
}

// console.log(createCube(1));
console.log(createCube(2));
//   console.log(createCube(3));
//   console.log(createCube(4));
