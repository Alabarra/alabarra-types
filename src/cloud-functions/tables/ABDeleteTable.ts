import { type ABResponseError, type ABResponseSuccessAbstract } from '../ABResponse'

/**
 * API to delete a table
 */
export interface ABDeleteTableData {

  /**
     * Business id
     */
  business_id: string

  /**
     * Table id
     */
  table_id: string
}

/**
 * Represents the result of a call to the Delete table API
 */
export type ABDeleteTableResponse = ABADeleteTableResponseSuccess | ABResponseError

export interface ABADeleteTableResponseSuccess extends ABResponseSuccessAbstract {

  result: Record<string, unknown>
}
