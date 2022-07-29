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
         * Client secret to finalize the payment
         */
         payment_intent_client_secret: string
    }
}