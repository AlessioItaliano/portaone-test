export const minNumber = (numbers) => {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < result) {
      result = numbers[i];
    }
  }
  return result;
};
