import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new table
 */
 export interface ABCreateTableData {

    /**
     * Table name
     */
    table_name: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
 export type ABCreateTableResponse = ABCreateTableResponseSuccess | ABResponseError;


export interface ABCreateTableResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the created table, which is in turn its visible name
         */
        table_id: string
    }
}