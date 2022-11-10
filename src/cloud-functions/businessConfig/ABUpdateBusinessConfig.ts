import { ABBusinessConfigCountry, ABBusinessConfigCurrency } from "../../types/ABBusinessConfig";
import { ABResponseError, ABResponseSuccessAbstract } from "../ABResponse";
import { PaletteOptions } from "@mui/material/styles";

/**
 * API to create a new table
 */
 export interface ABUpdateBusinessConfigData {

    /**
     * Business id
     */
     business_id: string;

     business_name?: string;
     country?: ABBusinessConfigCountry;
     main_language?: string;
     currency?: ABBusinessConfigCurrency;
     logo_url?: string;
     palette?: PaletteOptions;
}

/**
 * Represents the result of a call to the update config API
 */
 export type ABUpdateBusinessConfigResponse = ABUpdateBusinessConfigResponseSuccess | ABResponseError;


export interface ABUpdateBusinessConfigResponseSuccess extends ABResponseSuccessAbstract {

    result: {
        /**
         * The ID of the business
         */
         business_id: string
    }
}