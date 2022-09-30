import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API for marking order as fulfilled
 */
 export interface ABFulfillOrderData {

    /**
     * Id to the order
     */
    order_id: string;
}

export type ABFulfillOrderResponse = ABFulfillOrderResponseSuccess | ABResponseError;

export interface ABFulfillOrderResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}