import { ABWeekOpeningHours } from "./ABOpeningHours";


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

export interface ABBusinessConfig extends ABBusinessConfigData {
    id: string;
}

export interface ABBusinessConfigData {
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    logo_url: string;
    palette?: ABPalette;
    week_opening_hours: ABWeekOpeningHours;
}

export type ABPaletteOptions = {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

export type ABPalette = {
    primary?: ABPaletteOptions;
    secondary?: ABPaletteOptions;
    error?: ABPaletteOptions;
    warning?: ABPaletteOptions;
    info?: ABPaletteOptions;
    success?: ABPaletteOptions;
}

