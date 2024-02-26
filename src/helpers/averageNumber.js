export const averageNumber = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const result = sum / numbers.length;

  return result;
};
