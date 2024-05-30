export interface transactionRecordProps {
  transactionsDataLoading: boolean;
  transactionsData: Array<{
    account_id: number;
    amount: number;
    balance: number;
    details: string;
    id: number;
    transaction_type: string;
  }>;
  transactionsDataErr: any;
}
