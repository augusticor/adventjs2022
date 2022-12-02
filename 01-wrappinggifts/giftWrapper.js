// Score: 131
const wrapping = (gifts = []) => {
  return Array.from(gifts, (gift) => {
    let wrapper = '*'.repeat(gift.length + 2);
    return `${wrapper}\n${'*'}${gift}${'*'}\n${wrapper}`;
  });
};

// TESTS
const gifts = ['book', 'game', 'socks'];
console.log(wrapping(gifts));
/*
[
    ******
    *book*
    ******
    ******
    *game*
    ******
    *******
    *socks*
    *******
]
*/
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */
