/**
 * Represents a customer with an account
 */
export interface AlabarraCustomer {
    /**
     * id of the customer
     */
    id?: string;
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
//# sourceMappingURL=AlabarraCustomer.d.ts.map