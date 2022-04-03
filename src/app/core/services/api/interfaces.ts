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
  pendingTransactions: PendingTransactionI[];
  total: number;
}
