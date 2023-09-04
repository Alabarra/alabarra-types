import { ABProductOption, ABProductStatus, ABProductTag } from "../../types/ABProduct";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";
import { ABCreateProductData } from "./AlabarraCreateProduct";

// TODO: Think about using partial on ABProductData or similar with Omit on things that wont change.

/**
 * API to edit a product
 */
 export type ABEditProductData = Partial<ABCreateProductData> & {

    /**
     * Business id
     */
    business_id: string;

    /**
     * Product id
     */
    product_id: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABEditProductResponse = ABEditProductResponseSuccess | ABResponseError;

export interface ABEditProductResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the edited product
         */
        product_id: string
    }
}