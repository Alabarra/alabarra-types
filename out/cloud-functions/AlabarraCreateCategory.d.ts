import { AlabarraResponseSuccess } from "./AlabarraResponse";
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
 * Represents the result of a call to the Create Categorx API
 */
export interface AlabarraCreateCategoryResponse extends AlabarraResponseSuccess {
    result: {
        /**
         * The ID of the created category, which is in turn its visible name
         */
        category_id: string;
    };
}
//# sourceMappingURL=AlabarraCreateCategory.d.ts.map