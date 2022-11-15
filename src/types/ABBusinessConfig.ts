

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
    palette?: ABPalette;
}

export interface ABBusinessConfigData {
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    logo_url: string;
    palette?: ABPalette;
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

