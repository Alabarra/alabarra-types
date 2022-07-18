import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from './../../types/AlabarraResponse'
/**
 * Represents a cart line
 */
 export interface AlabarraCreateOrderDataCartLine {
    /**
     * Ref to the product
     */
    product_id: string;

    /**
     * number of products
     */
    quantity: number;

    /**
     * note for the particular line (e.g. "Cooked medium-rare please", "No ice")
     */
    note: string;
}

/**
 * API for creating a new order
 */
export interface AlabarraCreateOrderData {

    /**
     * Ref to the customer
     */
    customer: string;
    /**
     * note for the whole order (e.g. "please bring an extra glass. Thanks!")
     */
    general_note: string | null;

    /**
     * Array with the orders. Should not be empty
     */
    cart: AlabarraCreateOrderDataCartLine[];

    /**
     * Number of the table where the product should be delivered
     */
    table_number: number;
}


/**
 * Represents the result of a call to the Create Order API
 */
 export type AlabarraCreateOrderResponse = AlabarraCreateOrderResponseSuccess | AlabarraResponseError;

export interface AlabarraCreateOrderResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}