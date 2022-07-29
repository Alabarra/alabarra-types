

/**
 * Type of payment
 */
export enum AlabarraPaymentType {
    /**
     * Paid presentially via cash
     */
    PRESENTIAL_CASH = 'PRESENTIAL_CASH',
    /**
     * Paid presentially via credit or debit card
     */
    PRESENTIAL_CARD = 'PRESENTIAL_CARD',
    /**
     * Paid digitally via stripe
     */
    DIGITAL_STRIPE = 'DIGITAL_STRIPE'
}


export interface AlabarraPaymentStripe extends AlabarraPayment {

    payment_type: AlabarraPaymentType.DIGITAL_STRIPE;

    stripe_payment_id: string;
}

export interface AlabarraPaymentPresentialCard extends AlabarraPayment {

    payment_type: AlabarraPaymentType.PRESENTIAL_CARD;

    card_voucher_id: string;
}

/**
 * Represents a customer order
 */
export interface AlabarraPayment {

    /**
     * id of the payment
     */
    id?: string;

    /**
     * Date of when the order was created in the server
     */
    created_at?: Date;

    /**
     * Type of payment
     */
    payment_type: AlabarraPaymentType;

    /**
     * Id of the order in question
     */
    order_id: string;

    /**
     * General note for the complete ticket
     */
    general_note: string | null;

    /**
     * In case of presential payment: Ref to the waiter that confirmed the payment, otherwise null
     */
     payment_confirmed_by_waiter_id: string | null;

    /**
     * total amount paid
     */
    total_amount: number;
}