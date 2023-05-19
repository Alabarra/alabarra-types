import { ABUserRole } from "../../types/ABUser";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";

/**
 * API to create a new user with a role within the business
 */
 export interface ABCreateUserData {

    /**
     * Business id
     */
    business_id: string;

    /**
     * user first name
     */
    user_first_lame: string;

    /**
     * user last name
     */
    user_last_name: string;

    /**
     * user email
     */
    user_email: string;

    /**
     * user password
     */
    user_password: string;

    /**
     * user role
     */
    user_role: ABUserRole;
}

/**
 * Represents the result of a call to the Create User API
 */
 export type ABCreateUserResponse = ABCreateUserResponseSuccess | ABResponseError;


export interface ABCreateUserResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The id of the created user
         */
        user_id: string;
    }
}