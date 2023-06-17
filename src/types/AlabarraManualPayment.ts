import { DocumentReference } from "firebase/firestore";

/**
 * Represents a product that can be ordered
 */
 export interface ABManualPayment extends ABManualPaymentData {

    /**
    * id of the product
    */
    id: string;
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
 * Represents a manual payment
 */
 export interface ABManualPaymentData {

    /**
     * Date of product creation in the server
     */
    created_at?: any;

    /**
     * Ref to the order that was confirmed
     */
    order_id: string;

    /**
     * Ref to the waiter that confirmed the payment
     */
    confirmed_by_waiter_id: string;

    /**
     * General notes about the payment (e.g. Strip payment id 123), otherwise null
     */
    payment_notes: string | null;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
     last_updated_at: Date | null;
}