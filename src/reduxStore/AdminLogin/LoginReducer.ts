import { Admin } from "../Type";
import { adminLoginProps } from "./LoginReduxTypes";
const adminStoreData = window.localStorage.getItem("adminData");

export const adminLoginInitialState: adminLoginProps = {
  adminloginDataLoading: false,
  adminloginData: adminStoreData !== null ? JSON.parse(adminStoreData) : [],
  adminloginDataErr: [],
};

export const AdminLoginReducer = (
  state = adminLoginInitialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.ADMIN_LOGIN_REQUEST: {
      return {
        ...state,
        adminloginDataLoading: true,
      };
    }
    case Admin.ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        adminloginData: action.payload as adminLoginProps["adminloginData"],
        adminloginDataErr: [],
        adminloginDataLoading: false,
      };
    }
    case Admin.ADMIN_LOGIN_FAILURE: {
      return {
        ...state,
        adminloginDataErr: action.payload,
        adminloginDataLoading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        adminloginDataLoading: false,
        adminloginData: [],
        adminloginDataErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        adminloginDataLoading: false,
        adminloginData: [],
        adminloginDataErr: [],
      };
    }
    default:
      return state;
  }
};
