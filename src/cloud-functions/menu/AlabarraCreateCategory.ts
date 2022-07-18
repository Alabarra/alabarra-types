import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from "./../../types/AlabarraResponse";

/**
 * API to create a new category
 */
 export interface AlabarraCreateCategoryData {

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
export type AlabarraCreateCategoryResponse = AlabarraCreateCategoryResponseSuccess | AlabarraResponseError;

/**
 * Represents a sucessfull cll to create category
 */
export interface AlabarraCreateCategoryResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created category, which is in turn its visible name
         */
        category_id: string
    }
}