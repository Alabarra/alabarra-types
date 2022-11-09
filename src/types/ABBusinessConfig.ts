
export enum ABBusinessConfigCountry {
    DE = "DE",
    CL = "CL"
}

export enum ABBusinessConfigCurrency {
    EUR = "EUR",
    CLP = "CLP"
}

export interface ABBusinessConfig {
    business_name: string;
    base_country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    primary_color: string;
    logo_url: string;
}
