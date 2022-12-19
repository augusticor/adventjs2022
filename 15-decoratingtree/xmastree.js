// Score: 10
function decorateTree(base = '') {
  const cases = {
    PP: 'P',
    PB: 'R',
    PR: 'B',

    BB: 'B',
    BP: 'R',
    BR: 'P',

    RR: 'R',
    RP: 'B',
    RB: 'P',
  };

  const reduceLevel = (level) => {
    if (level.length > 1) {
      return (
        reduceLevel(
          level
            .split(' ')
            .map((value, index, array) =>
              index + 1 < array.length ? cases[value + '' + array[index + 1]] : ''
            )
            .join(' ')
            .trimEnd()
        ) +
        ',' +
        level
      );
    }

    return level;
  };

  return reduceLevel(base).split(',');
}

// TESTS
console.log(decorateTree('B B'));
/*
[
 'B',
 'B B'
]
*/

console.log(decorateTree('B P R P'));
/*
[
 'R',
 'P B',
 'R B B',
 'B P R P'
]
*/
