// Score: 240
function checkPart(part = '') {
  let left = 0;
  let right = part.length - 1;

  while (left < right) {
    let areDifferent = part.charAt(left) !== part.charAt(right);
    let removingLeft = part.charAt(left + 1) !== part.charAt(right);
    let removingRight = part.charAt(left) !== part.charAt(right - 1);

    if (areDifferent && removingLeft && removingRight) return false;

    right--;
    left++;
  }

  return true;
}

// TESTS
console.log(checkPart('uwu')); // true
console.log(checkPart('miidim')); // true
console.log(checkPart('midu')); // false
