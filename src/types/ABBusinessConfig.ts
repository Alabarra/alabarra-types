
import { PaletteOptions } from "@mui/material/styles";

export enum ABBusinessConfigCountry {
    DE = "DE",
    CL = "CL"
}

export enum ABBusinessConfigCurrency {
    EUR = "EUR",
    CLP = "CLP",
    USD = "USD",
    GBP = "GBP"
}

export interface ABBusinessConfig {
    id: string;
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    logo_url: string;
    palette?: PaletteOptions;
}


export interface ABBusinessConfigData {
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    logo_url: string;
    palette?: PaletteOptions;
}
