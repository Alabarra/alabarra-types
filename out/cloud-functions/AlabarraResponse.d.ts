export declare enum AlabarraResponseStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
/**
 * Represents the result of a call to the Create Order API
 */
export declare type AlabarraResponse = AlabarraResponseSuccess | AlabarraResponseError;
/**
 * Represents the result of a call to the Create Order API
 */
export interface AlabarraResponseSuccess {
    /**
     * Whether the request succedded or failed
     */
    status: AlabarraResponseStatus.SUCCESS;
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
    status: AlabarraResponseStatus.ERROR;
    /**
     * Error message in case of error
     */
    error_message?: string;
}
//# sourceMappingURL=AlabarraResponse.d.ts.map