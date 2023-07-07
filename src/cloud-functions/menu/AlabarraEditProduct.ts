import { ABProductOption, ABProductStatus, ABProductTag } from "../../types/ABProduct";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

// TODO: Think about using partial on ABProductData or similar with Omit on things that wont change.

/**
 * API to edit a product
 */
 export interface ABEditProductData {

    /**
     * Business id
     */
    business_id: string;

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
    category?: string;
 
    // This data will be generated server-side
    //created_at: Date;

    /**
     *  Description of the product
     */
    description?: string;
 
    /**
     *  Path to the image in the default bucket
     */
    image_temp_path?: string;
 
     //will be updated server-side
     //last_updated_at: Date | null;
 
    /**
     *  Options of the product, if any
     */
    options?: ABProductOption[];
 
    /**
     * Tags of the product, if any
     */
    tags?: ABProductTag[];
    /**
     *  Unit price
     */
    price?: number;
 
    /**
     *  Status of the product. If none is given, active will be chosen
     */
    status?: ABProductStatus;
}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABEditProductResponse = ABEditProductResponseSuccess | ABResponseError;

export interface ABEditProductResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created table, which is in turn its visible name
         */
        product_id: string
    }
}