
export enum ABBusinessConfigCountry {
    DE = "DE",
    CL = "CL"
}

export enum ABBusinessConfigCurrency {
    EUR = "EUR",
    CLP = "CLP"
}

export interface ABBusinessConfig {
    id: string;
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    primary_color: string;
    logo_url: string;
}


export interface ABBusinessConfigData {
    business_name: string;
    country: ABBusinessConfigCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    primary_color: string;
    logo_url: string;
}
