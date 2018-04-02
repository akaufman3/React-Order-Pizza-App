export function calculatePizzasNeeded(numberPeople) {
  const totalSlices = 2 * numberPeople;
  return Math.ceil(totalSlices / 8);
}
