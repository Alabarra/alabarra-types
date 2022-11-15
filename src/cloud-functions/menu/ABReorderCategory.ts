import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface ABReorderCategoryData {

    /**
     * Business id
     */
     business_id: string;

    /**
     *  Index of the category that needs to be moved
     */
    old_index: string;

    /**
     *  Destination index of the category to move
     */
    new_index: string;
}

/**
 * Represents the result of a call to the Reorder Category API
 */
export type ABReorderCategoryDataResponse = ABReorderCategoryDataResponseSuccess | ABResponseError;

export interface ABReorderCategoryDataResponseSuccess extends ABResponseSuccessAbstract {

    result: {}
}