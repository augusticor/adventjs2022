// Score: 200
function fixLetter(letter = '') {
  return letter
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/\s,/g, ',')
    .replace(/\s\./g, '.')
    .replace(/([,\.\?])(\w)/g, '$1 $2')
    .replace(/\s\?/g, '?')
    .replace(/\?{2,}/g, '?')
    .replace(/[\.\?!]\s\w/g, (match) => match.toUpperCase())
    .replace(/Santa Claus/gi, 'Santa Claus')
    .replace(/^\w/, (firstLetter) => firstLetter.toUpperCase())
    .replace(/\w$/, '$&.');
}

// TESTS
const firstLetter = fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
);

console.log(
  firstLetter,
  firstLetter ===
    'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
);

console.log();

const secondLetter = fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);

console.log(
  secondLetter,
  secondLetter ===
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
);

console.log();

const thirdLetter = fixLetter(
  '   good evening Santa CLAUS    . how you doing???????????? ,  is   everything ok ?  ,  i want much love for all the world. and the    , programmers'
);

console.log(
  thirdLetter,
  thirdLetter ===
    'Good evening Santa Claus. How you doing?, is everything ok?, i want much love for all the world. And the, programmers.'
);

console.log();

const fourthLetter = fixLetter('  hi,santa claus. are you there ?   ');
console.log(fourthLetter, fourthLetter === 'Hi, Santa Claus. Are you there?');

console.log();

const fifthLetter = fixLetter('  hi.big boy. are you there   . ');
console.log(fifthLetter, fifthLetter === 'Hi. Big boy. Are you there.');

console.log();

const sixthLetter = fixLetter('');
console.log(sixthLetter, sixthLetter === '');

console.log();

const seventhLetter = fixLetter('  hi?santa claus. are you there ? hi? ? ????  augusticor  ');
// const seventhLetter = fixLetter('  hi?santa claus. are you there? hi??????  augusticor  ');
console.log(seventhLetter, seventhLetter === 'Hi? Santa Claus. Are you there? Hi? Augusticor.');
