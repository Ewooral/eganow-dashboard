export interface PaymentMethod {
    name: string;
    value: number;
  }
  
  export interface PaymentMethods {
    collection: PaymentMethod[];
    payout: PaymentMethod[];
  }
  
  export interface ApiResponseBizCollectData {
    code: number;
    message: string;
    data: {
      paymentMethods: PaymentMethods;
     
    };
  }