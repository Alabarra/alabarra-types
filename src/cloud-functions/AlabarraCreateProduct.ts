import { DocumentReference, FieldValue } from "firebase/firestore";
import { AlabarraProductOption, AlabarraProductStatus } from "../types/AlabarraProduct";
import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from "./AlabarraResponse";

/**
 * API to create a new table
 */
 export interface AlabarraCreateProductData {

    /**
     *  Visible name of the product
     */
    title: string;

    /**
     *  Reference to the category where the product lives
     */
    category: DocumentReference;

    // This data will be generated server-side
    //created_at: Date;

    /**
     *  Description of the product
     */
    description: string;

    /**
     *  Image URL for the product
     */
    image_url: string;

    //will be generated server-side
    //last_updated_at: Date | null;

    /**
     *  Options of the product, if any
     */
    options?: AlabarraProductOption[];

    /**
     *  Unit price
     */
    price: number;

    /**
     *  Status of the product. If none is given, active will be chosen
     */
    status?: AlabarraProductStatus;

}

/**
 * Represents the result of a call to the Create Order API
 */
export type AlabarraCreateProductResponse = AlabarraCreateProductResponseSuccess | AlabarraResponseError;

export interface AlabarraCreateProductResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created product, which is in turn its visible name
         */
        product_id: string
    }
}