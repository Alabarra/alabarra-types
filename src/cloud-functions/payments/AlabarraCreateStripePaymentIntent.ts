import { AlabarraResponseError, AlabarraResponseSuccessAbstract } from "../../types/AlabarraResponse";

/**
 * API to create a new stripe payment
 */
 export interface AlabarraCreateStripePaymentIntentData {

    /**
     * Order id
     */
    order_id: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export type AlabarraCreateStripePaymentIntentResponse = AlabarraCreateStripePaymentIntentResponseSuccess | AlabarraResponseError;


export interface AlabarraCreateStripePaymentIntentResponseSuccess extends AlabarraResponseSuccessAbstract {

    result: {
        /**
         * The ID of the order
         */
        order_id: string
    }
}