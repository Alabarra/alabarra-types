import { DocumentReference } from "firebase/firestore";


/**
 * Represents a product that can be ordered
 */
 export interface ABCategory extends ABCategoryData {

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
     updated_at: Date | null;
}

/**
 * Represents a category that holds products
 */
 export interface ABCategoryData {

    /**
     * Title or name of the category
     */
    title: string;

    /**
     * Date of product creation in the server
     */
    created_at?: any;

    /**
     * Contained products
     */
    products: string[];

    /**
     * Short description of the category
     */
    description: string;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    updated_at: Date | null;
}