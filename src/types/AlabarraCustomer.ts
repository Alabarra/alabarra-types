import { DocumentReference } from "firebase/firestore";

/**
 * Represents a product that can be ordered
 */
 export interface ABCustomer extends ABCustomerData {

    /**
    * id of the product
    */
    id: string;

    /**
     * path of the product
     */
    path: string;

    /**
     * Date of product creation in the server
     */
    created_at: Date;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
     last_updated_at: Date | null;
}

/**
 * Represents a customer with an account
 */
 export interface ABCustomerData {

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
    created_at?: any;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
     last_updated_at: Date | null;
}
