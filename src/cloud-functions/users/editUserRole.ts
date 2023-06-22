import { ABUserRole } from "../../types/ABUser";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new user with a role within the business
 */
 export interface ABEditUserRoleData {

    /**
     * Business id
     */
    business_id: string;

    /**
     * id of the user
     */
    user_id: string;

    /**
     * new user role
     */
    user_role: ABUserRole;
}

/**
 * Represents the result of a call to the Create User API
 */
 export type ABEditUserRoleResponse = ABEditUserRoleResponseSuccess | ABResponseError;


export interface ABEditUserRoleResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The new role of the user
         */
        newRole: ABUserRole;
    }
}