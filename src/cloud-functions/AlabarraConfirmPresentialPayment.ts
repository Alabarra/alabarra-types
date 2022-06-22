/**
 * API for confirming a manual payment
 */
 export interface AlabarraConfirmPresentialPaymentData {

    /**
     * Ref to the order
     */
    order: string;

    /**
     * Ref to the waiter/waitress that confirmed the order
     */
    waiter: string;

    /**
     * String referencing the payment confirmation, such a Stripe/transbank payment id
     */
    payment_note?: string;

    /**
     * Amount paid
     */
    payment_total: number;
}