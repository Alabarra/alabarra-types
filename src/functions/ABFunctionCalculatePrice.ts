import { ABProduct, ABProductData, ABProductOptionMultipleSelectedValues, ABProductOptionSelections, ABProductOptionSingleSelectedValue, ABProductOptionsType } from "../types/ABProduct";

export const ABFunctionCalculatePrice = (product: ABProduct | ABProductData, selectedOptions: ABProductOptionSelections[]) => {
    
    let unitPrice = product.price;

    // Go trough every selected option
    selectedOptions.forEach((selectedOption, index) => {

        const optionId = selectedOption.option_id;
        console.log("calculating price for " + optionId);
        const productOption = product.options.find((obj) => obj.id === optionId);
        console.log("matched to productOption ", productOption);
    
        if (productOption) {
            if (productOption.type === ABProductOptionsType.SINGLE_SELECTION) {
                // Cast selection appropiately
                const singleSelectedOption = selectedOption as ABProductOptionSingleSelectedValue;
                console.log("option casted to single option", singleSelectedOption);

                // Increase the price for the given selected value
                const selectedPossibleValue = productOption.possible_values.find(obj => obj.id === singleSelectedOption.selected_value);
                console.log("respective possible value: ", selectedPossibleValue);
                if (selectedPossibleValue) {
                    unitPrice += selectedPossibleValue.price_adjustment;
                }
            } else if (productOption.type === ABProductOptionsType.MULTIPLE_SELECTION) {
                // Cast selection appropiately
                const multipleSelectedOption = selectedOption as ABProductOptionMultipleSelectedValues;
                console.log("option casted to multiple option", multipleSelectedOption);

                // Increase the price for every selected option
                multipleSelectedOption.selected_values.forEach(selectedValueId => {
                    console.log("trying to match selected value id", selectedValueId);
                    const selectedPossibleValue = productOption.possible_values.find(obj => obj.id === selectedValueId);
                    console.log("selectedPossibleValue found", selectedPossibleValue);
                    if (selectedPossibleValue) {
                        unitPrice += selectedPossibleValue.price_adjustment;
                    }
                });
            }
        }
    });

    return unitPrice;
}
