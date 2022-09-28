import { ABProductOption, ABProductStatus } from "../../types/ABProduct";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface ABCreateProductData {

    /**
     *  Visible name of the product
     */
    title: string;

    /**
     *  Reference to the category where the product lives
     */
    category_id: string;

    // This data will be generated server-side
    //created_at: Date;

    /**
     *  Description of the product
     */
    description: string;

    /**
     *  Path to the image in the default bucket
     */
    temp_image_path: string;

    //will be generated server-side
    //last_updated_at: Date | null;

    /**
     *  Options of the product, if any
     */
    options?: ABProductOption[];

    /**
     *  Unit price
     */
    price: number;

    /**
     *  Status of the product
     */
    status: ABProductStatus;

}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABCreateProductResponse = ABCreateProductResponseSuccess | ABResponseError;

export interface ABCreateProductResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created product, which is in turn its visible name
         */
        product_id: string
    }
}