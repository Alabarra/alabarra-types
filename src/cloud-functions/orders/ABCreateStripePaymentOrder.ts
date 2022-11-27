import { ABResponseError, ABResponseSuccessAbstract } from '../ABResponse'
import { ABCreateOrderData } from './AlabarraCreateOrder';

/**
 * API for creating a new order
 */
export interface ABCreateStripePaymentOrderData extends ABCreateOrderData {}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABCreateStripePaymentOrderResponse = ABCreateStripePaymentOrderSuccess | ABResponseError;

export interface ABCreateStripePaymentOrderSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created order
         */
        order_id: string,

        client_secret: string
    }
}