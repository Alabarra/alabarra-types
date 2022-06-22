/**
 * Represents a manual payment
 */
export interface AlabarraManualPayment {
    /**
     * id of the manual payment
     */
    id?: string;
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
//# sourceMappingURL=AlabarraManualPayment.d.ts.map