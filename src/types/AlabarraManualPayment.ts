import { DocumentReference } from "firebase/firestore";

/**
 * Represents a manual payment
 */
 export interface AlabarraManualPayment {

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
}