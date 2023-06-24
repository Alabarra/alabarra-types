import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to activate or deactivate a table
 */
 export interface ABUpdateTableStatusData {

    /**
     * Business id
     */
    business_id: string;

    /**
     * Table id
     */
    table_id: string;

    /**
     * Table active status
     */
    active: boolean;
}

/**
 * Represents the result of a call to the Delete table API
 */
export type ABUpdateTableStatusResponse = ABUpdateTableStatusResponseSuccess | ABResponseError;


export interface ABUpdateTableStatusResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The new activation status
         */
        active: boolean;
    }
}