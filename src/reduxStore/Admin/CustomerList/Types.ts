export interface custListProps {
  customerListLoading: boolean;
  customerList: Array<{
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
  }>;
  customerListErr: any;
  userDeletedLoading: boolean;
  userDeleted: any;
  userDeletedErr: any;
}
