
enum ABBusinessConfigBaseCountry {
    DE = "DE",
    CL = "CL"
}

enum ABBusinessConfigCurrency {
    EUR = "EUR",
    CLP = "CLP"
}

export interface ABBusinessConfig {
    business_name: string;
    base_country: ABBusinessConfigBaseCountry;
    main_language: string;
    currency: ABBusinessConfigCurrency;
    primary_color: string;
    logo_url: string;
}
