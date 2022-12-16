// Score: 180
function selectSleigh(distance = 30, sleighs = []) {
  let bestSleigh = null;

  for (let i = sleighs.length - 1; i >= 0; i--) {
    if (sleighs[i].consumption * distance <= 20) {
      bestSleigh = sleighs[i].name;
      break;
    }
  }

  return bestSleigh;
}

const distance = 30;
const sleighs = [
  { name: 'Dasher', consumption: 0.3 },
  { name: 'Dancer', consumption: 0.5 },
  { name: 'Rudolph', consumption: 0.7 },
  { name: 'Midu', consumption: 1 },
];

console.log(selectSleigh(distance, sleighs)); // => "Dancer"
