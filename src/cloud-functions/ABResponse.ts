
export enum ABResponseStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

/**
 * Represents the result of a call to the Create Order API
 */
export interface ABResponseSuccessAbstract {

  /**
     * Whether the request succedded or failed
     */
  status: ABResponseStatus.SUCCESS

  /**
     * Result in case of success
     */
  result?: any
}

/**
 * Represents the result of a call to the Create Order API
 */
export interface ABResponseError {

  /**
     * Whether the request succedded or failed
     */
  status: ABResponseStatus.ERROR

  /**
     * Error message in case of error
     */
  error_message?: string
}
