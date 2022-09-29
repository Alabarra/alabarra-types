import { ABProductOption, ABProductStatus } from "../../types/ABProduct";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface ABEditProductData {

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