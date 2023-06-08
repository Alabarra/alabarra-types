import { type ABPaymentMethod } from '../../types/AlabarraPayment'
import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API for confirming a manual payment
 */
export interface ABConfirmManualPaymentData {

  /**
     * Business id
     */
  business_id: string

  /**
     * Ref to the order
     */
  order_id: string

  /**
     * Ref to the waiter/waitress that confirmed the order
     */
  waiter_id: string

  /**
     * String referencing the payment confirmation, such a Stripe/transbank payment id
     */
  payment_note?: string

  /**
     * Method of manual payment
     */
  payment_method: ABPaymentMethod

  /**
     * Amount paid
     */
  payment_total: number
}

/**
 * Represents the result of a call to the Create Order API
 */
export type ABConfirmManualPaymentResponse = ABConfirmManualPaymentResponseSuccess | ABResponseError

export interface ABConfirmManualPaymentResponseSuccess extends ABResponseSuccessAbstract {

  result: {
    /**
         * The ID of the order
         */
    order_id: string
  }
}
