import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface AlabarraConfirmDigitalPaymentData {

    /**
     * Order id
     */
    order_id: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export type AlabarraConfirmDigitalPaymentResponse = AlabarraConfirmDigitalPaymentResponseSuccess | ABResponseError;


export interface AlabarraConfirmDigitalPaymentResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the order
         */
        order_id: string
    }
}