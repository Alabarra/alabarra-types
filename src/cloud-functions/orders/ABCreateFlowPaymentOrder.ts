import { ABResponseError, ABResponseSuccessAbstract } from '../ABResponse'
import { ABCreateOrderData } from './AlabarraCreateOrder';

/**
 * API for creating a new order
 */
export interface ABCreateFlowPaymentOrderData extends ABCreateOrderData {

    /**
     * Host (ej: localhost or client.dev.alabarra.com) to use in the redirect URI
     */
    redirect_uri_host: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABCreateFlowPaymentOrderResponse = ABCreateFlowPaymentOrderSuccess | ABResponseError;

export interface ABCreateFlowPaymentOrderSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string,

        /**
         * The token for the payment
         */
        payment_token: string,

        /**
         * The url for the payment
         */
        payment_url: string
    }
}