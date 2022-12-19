// Score: 40
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

  let level = base;
  let tree = [base];

  for (let i = 1; i < base.split(' ').length; i++) {
    level = level
      .split(' ')
      .map((value, index, array) =>
        index + 1 < array.length ? cases[value + array[index + 1]] : ''
      )
      .join(' ')
      .trimEnd();

    tree.unshift(level);
  }

  return tree;
}

// TESTS
console.log(decorateTree('B P R P'));
/*
  [
   'R',
   'P B',
   'R B B',
   'B P R P'
  ]
  */

console.log(decorateTree('B B'));
/*
  [
   'B',
   'B B'
  ]
  */
