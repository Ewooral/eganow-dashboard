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

export interface FetchDashboardDataParams {
  service: string; // Comma-separated service IDs
  startDate: string;  // ISO-8601 formatted date
  endDate: string;    // ISO-8601 formatted date
}

export interface BizCollectDashboardData {
  monthlyBalance: {
    collection: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    payout: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    commission: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    totalSettlements: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
  }
  transTypeTotalCounts: { name: string; value: number }[]
  collectionStatistics: { name: string; value: number }[]
  payoutStatistics: { name: string; value: number }[]
  paymentMethods: {
    collection: { name: string; value: number }[]
    payout: { name: string; value: number }[]
  }
  paymentTrends: {
    collection: number[]
    payout: number[]
  }
  settlementTransactions: any[]
}




export interface BizCollectDashboardData {
  monthlyBalance: {
    collection: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    payout: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    commission: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
    totalSettlements: {
      availableBalance: number
      monthlyValues: number[]
      percentageProgress: number
      progressType: string
    }
  }
  transTypeTotalCounts: { name: string; value: number }[]
  collectionStatistics: { name: string; value: number }[]
  payoutStatistics: { name: string; value: number }[]
  paymentMethods: {
    collection: { name: string; value: number }[]
    payout: { name: string; value: number }[]
  }
  paymentTrends: {
    collection: number[]
    payout: number[]
  }
  settlementTransactions: any[]
}

