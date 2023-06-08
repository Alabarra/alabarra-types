import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API to create a new stripe payment
 */
export interface ABCreateStripePaymentIntentData {

  /**
     * Business id
     */
  business_id: string

  /**
     * Order id
     */
  order_id: string
}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABCreateStripePaymentIntentResponse = ABCreateStripePaymentIntentResponseSuccess | ABResponseError

export interface ABCreateStripePaymentIntentResponseSuccess extends ABResponseSuccessAbstract {

  result: {
    /**
         * Client secret to finalize the payment
         */
    payment_intent_client_secret: string
  }
}
