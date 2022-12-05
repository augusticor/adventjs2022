// Score: 131
const fitsInOneBox = (boxes = []) => {
  let maxLength = 0;
  let maxWidth = 0;
  let maxHeight = 0;

  for (const box of boxes) {
    let { l, w, h } = box;
    maxLength = l > maxLength ? l : maxLength;
    maxWidth = w > maxWidth ? w : maxWidth;
    maxHeight = h > maxHeight ? h : maxHeight;
  }

  return maxLength === maxWidth && maxLength === maxHeight;
};

// TESTS
console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ])
); // true

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];
console.log(fitsInOneBox(boxes)); // false

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
];
console.log(fitsInOneBox(boxes2)); // true
