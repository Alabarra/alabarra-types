import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API for setting order as ready for delivery
 */
 export interface ABSetOrderReadyForDeliveryData {

    /**
     * Id to the order
     */
    order_id: string;
}

export type ABSetOrderReadyForDeliveryResponse = ABSetOrderReadyForDeliveryResponseSuccess | ABResponseError;

export interface ABSetOrderReadyForDeliveryResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string
    }
}