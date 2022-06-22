export declare enum AlabarraResponseStatus {
    SUCCESS = "SUCCESS",
    ERROR = "ERROR"
}
/**
 * Represents the result of a call to the Create Order API
 */
export interface AlabarraResponse {
    /**
     * Whether the request succedded or failed
     */
    status: AlabarraResponseStatus;
    /**
     * Result in case of success
     */
    result?: any;
    /**
     * Error message in case of error
     */
    error_message?: string;
}
//# sourceMappingURL=AlabarraResponse.d.ts.map