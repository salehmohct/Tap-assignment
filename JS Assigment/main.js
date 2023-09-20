function nums(array) {
  const n = array.length;
  const MathSum = (n * (n + 1)) / 2;
  const ArraySum = array.reduce((cur, acc) => cur + acc, 0);
  return MathSum - ArraySum;
}

console.log(nums([0, 1, 3]));
console.log(nums([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(nums([0, 1]));
