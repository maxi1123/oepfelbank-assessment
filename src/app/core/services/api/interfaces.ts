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
