import { ABProductOptionSelections } from '../../types/ABProduct';
import { ABResponseError, ABResponseSuccessAbstract } from '../ABResponse'
/**
 * Represents a cart line
 */
 export interface ABCreateOrderDataCartLine {
    /**
     * Ref to the product
     */
    product_id: string;

    /**
     * Options for the given product
     */
    selected_options: ABProductOptionSelections[];

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
export interface ABCreateOrderData {

    /**
     * Business id
     */
     business_id: string;

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
    cart: ABCreateOrderDataCartLine[];

    /**
     * Name of the table where the product should be delivered
     */
    table_name: string;
}


/**
 * Represents the result of a call to the Create Order API
 */
export type ABCreateOrderResponse = ABCreateOrderResponseSuccess | ABResponseError;

export interface ABCreateOrderResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}