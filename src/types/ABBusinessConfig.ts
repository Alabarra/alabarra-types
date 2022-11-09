
enum ABBusinessConfigBaseCountry {
    DE = "DE",
    CL = "CL"
}

enum ABBusinessConfigCurrency {
    EUR = "EUR",
    CLP = "CLP"
}

export interface ABBusinessConfig {
    business_name: String;
    base_country: ABBusinessConfigBaseCountry;
    main_language: String;
    currency: ABBusinessConfigCurrency;
    primary_color: String;
    logo_url: String;
}
