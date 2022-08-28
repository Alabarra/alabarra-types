import { ABResponseError, ABResponseSuccessAbstract } from '../ABResponse'
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
    note: string | null;
}

/**
 * API for creating a new order
 */
export interface AlabarraCreateOrderData {

    /**
     * Ref to the customer
     */
     customer_id: string;

    /**
     * Nickname for the customer
     */
     customer_nickname?: string;

    /**
     * note for the whole order (e.g. "please bring an extra glass. Thanks!")
     */
    general_note: string | null;

    /**
     * Array with the orders. Should not be empty
     */
    cart: AlabarraCreateOrderDataCartLine[];

    /**
     * Name of the table where the product should be delivered
     */
    table_name: string;
}


/**
 * Represents the result of a call to the Create Order API
 */
 export type AlabarraCreateOrderResponse = AlabarraCreateOrderResponseSuccess | ABResponseError;

export interface AlabarraCreateOrderResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}