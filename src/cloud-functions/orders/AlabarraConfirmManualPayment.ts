/**
 * API for confirming a manual payment
 */
 export interface AlabarraConfirmManualPaymentData {

    /**
     * Ref to the order
     */
    order_id: string;

    /**
     * Ref to the waiter/waitress that confirmed the order
     */
    waiter_id: string;

    /**
     * String referencing the payment confirmation, such a Stripe/transbank payment id
     */
    payment_note?: string;

    /**
     * Amount paid
     */
    payment_total: number;
}