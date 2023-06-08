
export const ABFunctionCalculateTip = (billTotal: number, tipPercentage: number): number => {
  return Math.floor(billTotal * (tipPercentage / 100))
}
