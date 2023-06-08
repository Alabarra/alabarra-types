import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API for marking order as fulfilled
 */
export interface ABFulfillOrderData {

  /**
     * Business id
     */
  business_id: string

  /**
     * Id to the order
     */
  order_id: string
}

export type ABFulfillOrderResponse = ABFulfillOrderResponseSuccess | ABResponseError

export interface ABFulfillOrderResponseSuccess extends ABResponseSuccessAbstract {

  result: {
    /**
         * The ID of the created order
         */
    order_id: string
  }
}
