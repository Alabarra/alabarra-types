import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API for starting to process (e.g. cook) an order
 */
 export interface ABStartProcessingOrderData {

    /**
     * Id to the order
     */
    order_id: string;
}

export type ABStartProcessingOrderResponse = ABStartProcessingOrderResponseSuccess | ABResponseError;

export interface ABStartProcessingOrderResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}