// Score: 10
function checkJump(heights = []) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights));
  const heightsCount = heights.length - 1;
  let right = maxHeightIndex + 1;
  let left = maxHeightIndex - 1;

  if (right > heightsCount || left < 0) return false;

  while (right <= heightsCount && left >= 0) {
    let isGreaterRight = heights[right] > heights[right - 1];
    let isGreaterLeft = heights[left] > heights[left + 1];

    if (isGreaterRight || isGreaterLeft) return false;

    if (right + 1 > heightsCount && left - 1 < 0) return true;

    right = right + 1 > heightsCount ? heightsCount : right + 1;
    left = left - 1 < 0 ? 0 : left - 1;
  }
}

console.log(checkJump([1, 3, 8, 5, 2])); // true
console.log(checkJump([1, 7, 3, 5])); // false
