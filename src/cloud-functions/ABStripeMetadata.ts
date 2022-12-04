
export type ABStripeMetadata = {

    /**
     * id of the table, which is in turn its name
     */
    business_id: string;

    /**
     * id of the table, which is in turn its name
     */
    order_id: string;

    /**
     * id of the table, which is in turn its name
     */
    payment_id: string;

    /**
     * Bill total without tips or discounts
     */
    bill_total: number;

    /**
     * total tip
     */
    tip: number;
}
