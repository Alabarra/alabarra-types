

export enum ABPaymentType {
    /**
     * Represents an incoming payment.
     */
    PAYMENT = 'PAYMENT',

    /**
     * Represents an outgoing payment.
     */
    REFUND = 'REFUND'
}

/**
 * Type of payment
 */
export enum ABPaymentMethod {
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
    EU_DIGITAL_STRIPE = 'EU_DIGITAL_STRIPE',

    /**
     * Paid digitally via MercadoPago
     */
    CL_MERCADOPAGO = 'CL_MERCADOPAGO',

    /**
     * Paid digitally via flow
     */

    CL_FLOW = 'CL_FLOW',
}


export interface ABPaymentDataStripe extends ABPaymentData {

    payment_method: ABPaymentMethod.EU_DIGITAL_STRIPE;

    stripe_payment_id: string;
}

export interface ABPaymentDataFlow extends ABPaymentData {

    payment_method: ABPaymentMethod.CL_FLOW;

    flow_order_id: string;

    flow_token: string;
}

export interface ABPaymentDataPresentialCard extends ABPaymentData {

    payment_method: ABPaymentMethod.PRESENTIAL_CARD;

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
     * Method of payment
     */
    payment_method: ABPaymentMethod;

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

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    last_updated_at: Date | null;
}
