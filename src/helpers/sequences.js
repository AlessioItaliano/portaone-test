export const findSequences = (array) => {
  let maxIncreasing = [];
  let maxDecreasing = [];
  let currentIncreasing = [];
  let currentDecreasing = [];

  for (let i = 0; i < array.length; i++) {
    if (
      currentIncreasing.length === 0 ||
      array[i] > currentIncreasing[currentIncreasing.length - 1]
    ) {
      currentIncreasing.push(array[i]);
      if (currentIncreasing.length > maxIncreasing.length) {
        maxIncreasing = currentIncreasing;
      }
    } else {
      currentIncreasing = [array[i]];
    }

    if (
      currentDecreasing.length === 0 ||
      array[i] < currentDecreasing[currentDecreasing.length - 1]
    ) {
      currentDecreasing.push(array[i]);
      if (currentDecreasing.length > maxDecreasing.length) {
        maxDecreasing = currentDecreasing;
      }
    } else {
      currentDecreasing = [array[i]];
    }
  }

  return { maxIncreasing, maxDecreasing };
};
