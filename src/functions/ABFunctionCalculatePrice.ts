import { ABProduct, ABProductData, ABProductOptionMultipleSelectedValues, ABProductOptionSelections, ABProductOptionSingleSelectedValue, ABProductOptionsType } from "../types/ABProduct";

export const ABFunctionCalculatePrice = (product: ABProduct | ABProductData, selectedOptions: ABProductOptionSelections[]) => {
    
    let unitPrice = product.price;

    // Go trough every selected option
    selectedOptions.forEach((_, index) => {

        // Original product option
        const productOption = product.options[index];

        if (productOption.type == ABProductOptionsType.SINGLE_SELECTION) {
            //Get selected option
            const singleSelectedValue = selectedOptions[index] as ABProductOptionSingleSelectedValue;
            
            // Find product option that is selected to find price adjustment value
            const selectedOption = productOption.possible_values.find((prod) => prod.id === singleSelectedValue.option_id);
            if (selectedOption) {
                unitPrice += selectedOption.price_adjustment;
            }
        } else if (productOption.type == ABProductOptionsType.MULTIPLE_SELECTION) {
            
            //Get selected option
            const selectedValues = selectedOptions[index] as ABProductOptionMultipleSelectedValues;
            
            selectedValues.selected_values.forEach((selectedValue) => {
                // Find product option that is selected to find price adjustment value
                const selectedOption = productOption.possible_values.find((prod) => prod.id === selectedValue);
                if (selectedOption) {
                    unitPrice += selectedOption.price_adjustment;
                }
            });
        }
    });

    return unitPrice;
}
