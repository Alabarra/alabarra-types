import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to activate or deactivate a table
 */
 export interface ABActivateTableData {

    /**
     * Business id
     */
    business_id: string;

    /**
     * Table id
     */
    table_id: string;

    /**
     * New activation status
     */
    active: boolean;
}

/**
 * Represents the result of a call to the Activate table API
 */
 export type ABActivateTableResponse = ABActivateTableResponseSuccess | ABResponseError;


export interface ABActivateTableResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the table
         */
        table_id: string;

        /**
         * Status of the table
         */
        active: boolean;
    }
}