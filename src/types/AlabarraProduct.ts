import { DocumentReference } from "firebase/firestore";

/**
 * Status of each product
 */
 export enum AlabarraProductStatus {

    /**
     * Product is active and in stock
     */
    ACTIVE = 'ACTIVE',

    /**
     * Produc is inactive
     */
    INACTIVE = 'INACTIVE'
}

/**
 * Type of option, such as single selection, multiple selection, etc.
 */
export enum AlabarraProductOptionsType {

    /**
     * Single option selection, to be represented by radio buttons
     */
    SINGLE_SELECTION = 'SINGLE_SELECTION',

    /**
     * Multiple option selection, to be represented by checkboxes
     */
    MULTIPLE_SELECTION = 'MULTIPLE_SELECTION'
}

/**
 * Generic container for product options
 */
export interface AlabarraProductOptionsPossibleValues {

    /**
     * Customer-facing name of the possible value
     */
    title: string;

    /**
     * Impact this option has on price. This will be added/substracted to/from the unit price.
     */
    price_adjustment: number;
}

export type AlabarraProductOptionMultipleSelectionSelectedValues = boolean[];
export type AlabarraProductOptionSingleSelectionSelectedValue = string;

export interface AlabarraProductOptionMultipleSelection extends AlabarraProductOption {

    /**
     * Which possible values are checked
     */
    default_values: AlabarraProductOptionMultipleSelectionSelectedValues;

    /**
     * Maximum number of selections. if undefined, unlimited selection is possible
     */
    max_selection?: number;

    /**
     * Minimum number of selections. Cannot be greater than max_selection
     */
    min_selection: number;
}

export interface AlabarraProductOptionSingleSelection extends AlabarraProductOption {

    /**
     * Title of the default value
     */
     default_value: AlabarraProductOptionSingleSelectionSelectedValue;
}

/**
 * Represents something that can be configured for the product
 */
 export interface AlabarraProductOption {

    /**
     * Customer-facing title of the option
     */
    title: string;

    /**
     * Type of option; Single selection, multiple selection, etc.
     */
    type: AlabarraProductOptionsType;

    /**
     * Array of the possible values this option can take
     */
    possible_values: AlabarraProductOptionsPossibleValues[];
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
     * path of the product
     */
    path?: string;

    /**
    * id of the product
    */
    ref?: DocumentReference;

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

    /**
     * Possible options to configure the product
     */
    options?: AlabarraProductOption[];
}