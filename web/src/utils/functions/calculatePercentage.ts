export const calculatePercentage = (partialValue: number, totalValue: number): number => {
  return parseInt(((100 * partialValue) / totalValue).toFixed(0));
};
