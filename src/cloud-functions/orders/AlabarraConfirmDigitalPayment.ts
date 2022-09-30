import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface ABConfirmDigitalPaymentData {

    /**
     * Order id
     */
    order_id: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export type ABConfirmDigitalPaymentResponse = ABConfirmDigitalPaymentResponseSuccess | ABResponseError;


export interface ABConfirmDigitalPaymentResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the order
         */
        order_id: string
    }
}