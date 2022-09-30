import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new category
 */
 export interface ABCreateCategoryData {

    /**
     * Category name
     */
    category_name: string;

    /**
    * Category description
    */
    category_description: string;
}


/**
 * Represents the result of a call to the Create Category API
 */
export type ABCreateCategoryResponse = ABCreateCategoryResponseSuccess | ABResponseError;

/**
 * Represents a sucessfull cll to create category
 */
export interface ABCreateCategoryResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created category, which is in turn its visible name
         */
        category_id: string
    }
}