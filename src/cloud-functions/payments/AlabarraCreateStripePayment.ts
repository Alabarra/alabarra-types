import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from "../../types/AlabarraResponse";

/**
 * API to create a new stripe payment
 */
 export interface AlabarraCreateStripePaymentData {

    /**
     * Order id
     */
    order_id: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export type AlabarraCreateStripePaymentesponse = AlabarraCreateStripePaymentResponseSuccess | AlabarraResponseError;


export interface AlabarraCreateStripePaymentResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the order
         */
        order_id: string
    }
}