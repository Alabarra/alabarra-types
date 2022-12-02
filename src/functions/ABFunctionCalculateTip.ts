
export const ABFunctionCalculateTip = (billTotal: number, tipPercentage: number) => {
    return Math.floor(billTotal * (tipPercentage / 100));
}
