export interface createUserProps {
  createUserResLoading: boolean;
  createUserRes: any;
  createUserResErr: any;
}
export type craeteUserActionProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  dob: string;
  gender: string;
  role_id: number;
  contact_no: string;
};
