import { DocumentReference } from "firebase/firestore";

/**
 * Represents a category that holds products
 */
 export interface AlabarraCategory {

    /**
     * id of the category
     */
    id?: string;

    /**
     * Title or name of the category
     */
    title: string;

    /**
     * Date of product creation in the server
     */
    created_at?: Date;

    /**
     * Contained products
     */
    products: DocumentReference[];

    /**
     * Short description of the category
     */
    description: string;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    updated_at: Date | null;
}