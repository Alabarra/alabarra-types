

/**
 * Type of payment
 */
export enum ABPaymentType {
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


export interface ABPaymentStripe extends ABPayment {

    payment_type: ABPaymentType.DIGITAL_STRIPE;

    stripe_payment_id: string;
}

export interface ABPaymentPresentialCard extends ABPayment {

    payment_type: ABPaymentType.PRESENTIAL_CARD;

    card_voucher_id: string;
}

export enum ABPaymentStatus {
    
    OPEN = "OPEN",

    PROCESSING = "PROCESSING",

    SUCCEEDED = "SUCCEEDED",

    FAILED = "FAILED"
}

/**
 * Represents a customer order
 */
/**
 * Represents a product that can be ordered
 */
 export interface ABPayment extends ABPaymentData {

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


export interface ABPaymentData {

    /**
     * Date of when the order was created in the server
     */
    created_at: any;

    /**
     * Type of payment
     */
    payment_type: ABPaymentType;

    /**
     * Current status of the payment
     */
    payment_status: ABPaymentStatus;

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