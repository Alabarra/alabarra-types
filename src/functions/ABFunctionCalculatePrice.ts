import { ABProductOption, ABProductOptionMultipleSelectedValues, ABProductOptionSelections, ABProductOptionSingleSelectedValue, ABProductOptionsType } from "../types/ABProduct";

export const ABFunctionCalculatePrice = (basePrice: number, selectedOptions: ABProductOptionSelections[], availableProductOptions: ABProductOption[]) => {
    
    let unitPrice = basePrice;

    // Go trough every selected option
    selectedOptions.forEach((selectedOption, index) => {

        // Original product option
        if (availableProductOptions) {
            const productOption = availableProductOptions[index];

            if (productOption.type == ABProductOptionsType.SINGLE_SELECTION) {
                //Get selected option
                const singleSelectedOption = selectedOptions[index] as ABProductOptionSingleSelectedValue;

                if (singleSelectedOption) {
                    // Find product option that is selected to find price adjustment value
                    const originOption = productOption.possible_values.find(possible_value => possible_value.title == singleSelectedOption);
                    unitPrice += originOption?.price_adjustment ?? 0;
                }
            } else if (productOption.type == ABProductOptionsType.MULTIPLE_SELECTION) {
                
                //Get selected option
                const selectedValues = selectedOptions[index] as ABProductOptionMultipleSelectedValues;
                if (selectedValues) {
                    selectedValues.forEach((selectedValue, index) => {
                        if (selectedValue) {
                            unitPrice += productOption.possible_values[index].price_adjustment;
                        }
                    });
                }
            }
        }
    });

    return unitPrice;
}
