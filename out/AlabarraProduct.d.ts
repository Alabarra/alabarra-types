/**
 * Status of each product
 */
export declare enum AlabarraProductStatus {
    /**
     * Product is active and in stock
     */
    ACTIVE = "ACTIVE",
    /**
     * Produc is inactive
     */
    INACTIVE = "INACTIVE"
}
/**
 * Represents a product that can be ordered
 */
export interface AlabarraProduct {
    /**
     * id of the product
     */
    id?: string;
    /**
     * Current status of the product
     */
    status: AlabarraProductStatus;
    /**
     * Title or name of the product
     */
    title: string;
    /**
     * Short description of the product
     */
    description: string;
    /**
     * List price of the product
     */
    price: number;
    /**
     * Ref to the category where the product resides, null otherwise. n:1 relationship
     */
    category: string | null;
    /**
     * Url to the hero image of thep roduct
     */
    image_url: string;
    /**
     * Date of product creation in the server
     */
    created_at?: Date;
    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    last_updated_at: Date | null;
}
//# sourceMappingURL=AlabarraProduct.d.ts.map