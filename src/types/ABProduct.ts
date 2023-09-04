
/**
 * Status of each product
 */
 export enum ABProductStatus {

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
export enum ABProductOptionsType {

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
export interface ABProductOptionsPossibleValue {

    /**
     * id of the selection
     */
    id: string;
    
    /**
     * Customer-facing name of the possible value
     */
    title: string;

    /**
     * Impact this option has on price. This will be added/substracted to/from the unit price.
     */
    price_adjustment: number;
}

export type ABProductOptionSelections = ABProductOptionMultipleSelectedValues | ABProductOptionSingleSelectedValue;

export type ABProductOptionMultipleSelectedValues = {
    option_id: string;
    selected_values: string[]
};

export type ABProductOptionSingleSelectedValue = {
    option_id: string;
    selected_value: string
}

export type ABProductOption = ABProductOptionSingleSelection | ABProductOptionMultipleSelection;

export interface ABProductOptionMultipleSelection extends ABProductOptionAbstract {

    /**
     * Which possible values are checked
     */
    default_values: string[];

    /**
     * Maximum number of selections
     */
    max_selection: number;

    /**
     * Minimum number of selections. Cannot be greater than max_selection.
     */
    min_selection: number;
}

export interface ABProductOptionSingleSelection extends ABProductOptionAbstract {

    /**
     * Title of the default value
     */
     default_value: string;
}

/**
 * Represents something that can be configured for the product
 */
 export interface ABProductOptionAbstract {

    /**
     * id of the given option
     */
    id: string;

    /**
     * Customer-facing title of the option
     */
    title: string;

    /**
     * Type of option; Single selection, multiple selection, etc.
     */
    type: ABProductOptionsType;

    /**
     * Array of the possible values this option can take
     */
    possible_values: ABProductOptionsPossibleValue[];
}


/**
 * Represents a product that can be ordered
 */
 export interface ABProduct extends ABProductData {

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

/**
 * Represents a product that can be ordered
 */
 export interface ABProductData {

    /**
     * Current status of the product
     */
    status: ABProductStatus;

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
     * Array with the categories the product belongs to. Can be emtpy.
     */
    categories: string[];

    /**
     * Optional food tags
     */
    tags: ABProductTag[];

    /**
     * Url to the hero image of thep roduct
     */
    image_url: string;

    /**
     * Date of product creation in the server
     */
    created_at: any;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    last_updated_at: any;

    /**
     * Possible options to configure the product
     */
    options: ABProductOption[];
}

export enum ABProductTag {

    VEGETARIAN = "VEGETARIAN",
    VEGAN = "VEGAN",
    NO_ADDED_SUGAR = "NO_ADDED_SUGAR",
    GLUTEN_FREE = "GLUTEN_FREE",
    NO_GMO = "NO_GMO"

}