/**
 * Represents a client that can order products
 */
export interface ABUser extends ABUserData {

    /**
     * id of the user
     */
    id: string;
}

export interface ABUserData {

    /**
     * Orders from the user
     */
    orders: ABOrderRef [];

    name: string | null;

    forename: string | null;

    email: string | null;
}

/**
 * Represents the role a user can have in a given business
 */
export enum ABUserRole {

    ADMIN = "ADMIN",

    CASHIER = "CASHIER",

    WAITER = "WAITER",

    RUNNER = "RUNNER",

    COOK = "COOK"
}

 

export type ABOrderRef = {

    business_id: string;

    order_id: string;
}