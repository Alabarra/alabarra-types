import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API for starting to process (e.g. cook) an order
 */
export interface ABStartProcessingOrderData {

  /**
     * Business id
     */
  business_id: string

  /**
     * Id to the order
     */
  order_id: string
}

export type ABStartProcessingOrderResponse = ABStartProcessingOrderResponseSuccess | ABResponseError

export interface ABStartProcessingOrderResponseSuccess extends ABResponseSuccessAbstract {

  result: {
    /**
         * The ID of the created order
         */
    order_id: string
  }
}
