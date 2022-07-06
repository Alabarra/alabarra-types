
export enum AlabarraResponseStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}
/**
 * Represents the result of a call to the Create Order API
 */
type AlabarraResponse = AlabarraResponseSuccess | AlabarraResponseError;

/**
 * Represents the result of a call to the Create Order API
 */
 export interface AlabarraResponseSuccess {

    /**
     * Whether the request succedded or failed
     */
    status: AlabarraResponseStatus;

    /**
     * Result in case of success
     */
    result?: any;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export interface AlabarraResponseError {

    /**
     * Whether the request succedded or failed
     */
    status: AlabarraResponseStatus;

    /**
     * Error message in case of error
     */
    error_message?: string;
}