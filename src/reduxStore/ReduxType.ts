export interface reducerState {
  token: string | null;
  userToken: string | null;
}

export const singleUserDataInitialState = {
  address: "",
  contact_no: "",
  dob: "",
  email: "",
  first_name: "",
  gender: "",
  id: 0,
  last_name: "",
  role_id: 0,
  status: "",
};

export type adminLoginProps = {
  email: string;
  password: string;
};
export type customerLoginProps = {
  email: string;
  password: string;
};

export type craeteTransactionRequestProps = {
  transaction: {
    transaction_type: string;
    details: string;
    amount: number;
    account_id: number;
  };
};
export type updateUserInfoProps = {
  user: {
    first_name: string;
    last_name: string;
    contact_no: string;
    address: string;
    dob: string;
    gender: string;
  };
};
