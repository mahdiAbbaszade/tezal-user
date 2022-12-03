export interface TypeinfoShopData {
  NameJob: string;
  AddressJob: string;
  Discounts: [];
  Loans: [];
  Rate: number;
  Status: boolean;
  phoneHome: string;
  _id: string;
  Features: [];
  WorkingDays: [];
}

export interface TypeinfoLoanRequest {
  Description: string;
  Title: string;
  PrePayPercentage: number;
  CanDoByMySelf: boolean;
  DiscountFromBusinessToSEB: number;
  DiscountFromBusinessToSEBType: number;
  DiscountFromSEBToCustomers: number;
  FirstInstalment: {
    Amount: number;
    isActive: boolean;
  };
  LoanPercentage: number;
  MoneySleepTime: number;
  MustGoToGovernmentOffices: boolean;
  isActive: boolean;
  Duration: number;
}

export interface typeInstallmentMonths {
  RequestLOANAmount: number;
  Duration: number;
}
