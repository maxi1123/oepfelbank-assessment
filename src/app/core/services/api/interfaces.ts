/* eslint-disable */

export interface AccountI {
  accountId: string;
  accountSubType: string;
  currency: string;
  balance: number;
}

export interface AccountsResponseI {
  accounts: AccountI[];
  totalBalance: number;
}

export interface TransactionI {
  amount: string;
  bookingDate: string;
  currency: string;
  status: string;
  transactionId: string;
  transactionInfo: string;
}

export interface TransactionsResponseI {
  accountId: string;
  transactions: TransactionI[];
  total: number;
}

export interface PendingTransactionI {
  schedDateTime: string;
  amount: string;
  currency: string;
  creditorAccount: string;
}

export interface PendingTransactionsResponseI {
  accountId: string;
  transactions: PendingTransactionI[];
  total: number;
}

export interface StockI {
  name: string;
  symbol: string;
  isin: string;
  closingPrice: number;
}

export interface HoldingI {
  stock: StockI;
  owned: number;
}

export interface InvestmentTransactionI {
  id: string;
  date: string;
  symbol: string;
  quantity: number;
  price: number;
  type: 'BUY' | 'SELL';
}

export interface InvestmentAccountI {
  accountId: string;
  balance: number;
  holdings: HoldingI[];
  transactions: InvestmentTransactionI[];
}

export interface InvestmentsResponseI {
  accounts: InvestmentAccountI[];
  total: number;
}
