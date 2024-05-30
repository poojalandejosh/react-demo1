export type buttonComponentProps = {
  btnText?: string;
  backgroundColor?: string;
  onClick?: () => void;
  color?: string;
  fontWeight?: string;
};

type dataProps = {
  first_name: string;
  last_name: string;
  contact_no: string | number;
  address: string;
  id: string | number;
};

export type cardComponentProps = {
  data?: dataProps;
  onClick?: any;
  showBtn?: string;
};

export type inputAndLAbleComponentProps = {
  labelName?: string;
  type?: string;
  color?: string;
  borderBottom?: string;
  flexDirection?: string | undefined;
  alignItems?: string;
  value?: string | number;
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassward?: string;
};
export type textComponentProps = {
  color?: string;
  fontSize?: number;
  text?: string;
  fontFamily?: string;
  textAlign?: string;
  fontWeight?: string;
  fontStyle?: string;
  textSizeAdjust?: string;
};

export type transationCardComponentProps = {
  data: {
    account_id: string | number;
    transaction_type: string;
    amount: number;
    balance: number;
    details: string;
  };
};
