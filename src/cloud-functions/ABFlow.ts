export type ABFlowCreatePaymentData = {
    subject: string;
    currency: "CLP";
    amount: number;
    email: string;
    paymentMethod: ABFlowPaymentMethod;
    commerceOrder: string;
    urlConfirmation: string;
    urlReturn: string;
    s: string;
    apiKey: string;
  };
  
export enum ABFlowPaymentMethod {
  "ALL" = 9,
  "WEBPAY_PLUS" = 1,
  "KLAP" = 3,
  "ONEPAY" = 5,
  "MACH" = 15,
  "WEBPAY_ONECLICK" = 20,
  "KHIPU" = 22,
  "RIPLEY_CHEK" = 25
}

export type ABFlowCreatePaymentResponse = {
  url: string;
  token: string;
  flowOrder: number;
};

export type ABFlowGetStatusResponse = {
  flowOrder: number;
  commerceOrder: string;
  requestDate: string;
  status: number;
  subject: string;
  currency: string;
  amount: number;
  payer: string;
  optional?: {
    RUT?: string;
    ID?: string;
  };
  pending_info: {
    media: string;
    date: string;
  };
  paymentData: {
    date: string;
    media: string;
    conversionDate: string;
    conversionRate: number;
    amount: number;
    currency: string;
    fee: number;
    balance: number;
    transferDate: string;
  };
  merchantId: string;
};
