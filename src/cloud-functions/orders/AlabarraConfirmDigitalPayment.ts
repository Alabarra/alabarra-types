import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from "./../../types/AlabarraResponse";

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
 export type AlabarraConfirmDigitalPaymentResponse = AlabarraConfirmDigitalPaymentResponseSuccess | AlabarraResponseError;


export interface AlabarraConfirmDigitalPaymentResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the order
         */
        order_id: string
    }
}