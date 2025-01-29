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




export interface Transaction {
  collectionBalance: number;
  payoutBalance: number;
  commissionBalance: number;
  totalSettlements:number;
  transactionDate: string
  merchantTransRefNumber: string
  sourceAccountName: string
  sourceAccountNumber: string
  beneficiaryAccountName: string
  beneficiaryAccountNumber: string
  amount: number
  commission: number
  eganowStatus: string
  merchantStatus: string
  transactionType: string
}

export interface ApiResponse {
  code: number
  message: string
  data: Transaction[]
}
