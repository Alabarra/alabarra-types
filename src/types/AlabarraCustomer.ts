import { DocumentReference } from "firebase/firestore";

/**
 * Represents a customer with an account
 */
 export interface AlabarraCustomer {

    /**
     * id of the category
     */
     id?: string;

     /**
      * Path of the category
      */
     path?: string;
 
     /**
      * Path of the category
      */
     ref?: DocumentReference;

    /**
     * First name of the customer
     */
    firstname: string;

    /**
     * Last name of the customer
     */
    lastname: string;

    /**
     * Email of the customer if available, null otherwise
     */
    email: string | null;

    /**
     * Birthdate of the customer if available, null otherwise
     */
    birthdate: Date | null;

    /**
     * List of orders placed by user
     */
    orders: String[];

    /**
     * Date of account creation
     */
    created_at?: Date;
}
