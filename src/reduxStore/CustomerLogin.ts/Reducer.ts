import { Admin } from "../Type";
import { customerLoginProps } from "./Types";
const customerStoreData = window.localStorage.getItem("userData");

const initialState: customerLoginProps = {
  customerloginDataLoading: false,
  customerloginData:
    customerStoreData !== null ? JSON.parse(customerStoreData) : [],
  customerloginDataErr: [],
};

export const CustomerLoginReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.CUSTOMER_LOGIN_REQUEST: {
      return {
        ...state,
        customerloginDataLoading: true,
      };
    }
    case Admin.CUSTOMER_LOGIN_SUCCESS: {
      return {
        ...state,
        customerloginData:
          action.payload as customerLoginProps["customerloginData"],
        customerloginDataErr: [],
        customerloginDataLoading: false,
      };
    }
    case Admin.CUSTOMER_LOGIN_FAILURE: {
      return {
        ...state,
        customerloginDataErr: action.payload,
        customerloginDataLoading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        customerloginDataLoading: false,
        customerloginData: [],
        customerloginDataErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        customerloginDataLoading: false,
        customerloginData: [],
        customerloginDataErr: [],
      };
    }
    default:
      return state;
  }
};
