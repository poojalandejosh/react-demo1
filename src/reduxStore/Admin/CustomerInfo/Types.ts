export interface singleUserProps {
  singleUserDataLoading: boolean;
  singleUserData: {
    address: string;
    contact_no: string;
    dob: string;
    email: string;
    first_name: string;
    gender: string;
    id: number;
    last_name: string;
    role_id: number;
    status: string;
  };
  singleUserDataErr: any;
}
