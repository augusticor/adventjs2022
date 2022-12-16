// Score: 260
function selectSleigh(distance = 30, sleighs = []) {
  const name = sleighs
  .filter((sleigh) => sleigh.consumption * distance <= 20)
  .at(-1);

  return name ? name.name : null;
}

const distance = 30;
const sleighs = [
  { name: 'Dasher', consumption: 0.3 },
  { name: 'Dancer', consumption: 0.5 },
  { name: 'Rudolph', consumption: 0.7 },
  { name: 'Midu', consumption: 1 },
];

// const distance = 50;
// const sleighs = [
//   { name: 'Pedrosillano', consumption: 1 },
//   { name: 'SamarJaffal', consumption: 2 },
//   { name: 'marcospage', consumption: 3 },
// ];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
