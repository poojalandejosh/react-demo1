export interface transactionProps {
  allTransactionLoading: boolean;
  allTransaction: Array<{
    account_id: number;
    amount: number;
    balance: number;
    details: string;
    id: number;
    transaction_type: string;
  }>;
  allTransactionErr: any;
}
