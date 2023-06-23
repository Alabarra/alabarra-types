import { ABUserRole } from "../../types/ABUser";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a remove the role from a user in the given business
 */
 export interface ABRemoveUserRoleData {

    /**
     * Business id
     */
    business_id: string;

    /**
     * id of the user
     */
    user_id: string;
}

/**
 * Represents the result of a call to the Create User API
 */
 export type ABRemoveUserRoleResponse = ABRemoveUserRoleResponseSuccess | ABResponseError;


export interface ABRemoveUserRoleResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The affected user id
         */
        user_id: string;
    }
}