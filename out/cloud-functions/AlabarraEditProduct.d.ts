import { DocumentReference } from "firebase/firestore";
import { AlabarraProductOption, AlabarraProductStatus } from "../types/AlabarraProduct";
import { AlabarraResponseSuccess } from "./AlabarraResponse";
/**
 * API to create a new table
 */
export interface AlabarraEditProductData {
    /**
     * Table name
     */
    product_id: string;
    /**
     *  Visible name of the product
     */
    title?: string;
    /**
     *  Reference to the category where the product lives
     */
    category?: DocumentReference;
    /**
     *  Description of the product
     */
    description?: string;
    /**
     *  Image URL for the product
     */
    image_url?: string;
    /**
     *  Options of the product, if any
     */
    options?: AlabarraProductOption[];
    /**
     *  Unit price
     */
    price?: number;
    /**
     *  Status of the product. If none is given, active will be chosen
     */
    status?: AlabarraProductStatus;
}
/**
 * Represents the result of a call to the Create Order API
 */
export interface AlabarraEditProductSuccess extends AlabarraResponseSuccess {
    result: {
        /**
         * The ID of the created table, which is in turn its visible name
         */
        product_id: string;
    };
}
//# sourceMappingURL=AlabarraEditProduct.d.ts.map