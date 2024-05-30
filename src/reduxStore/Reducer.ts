import { AxiosResponse } from "axios";
import { Admin } from "./Type";
import { reducerState, singleUserDataInitialState } from "./ReduxType";
const customerStoreData = window.localStorage.getItem("userData");
const key = window.localStorage.getItem("key");
const userkey = window.localStorage.getItem("userkey");

const initialState: reducerState = {
  token: window.localStorage.getItem("key") || null,
  userToken: window.localStorage.getItem("userkey") || null,
};

export const AdminReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.UPDATE_USER_INFO_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.UPDATE_USER_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case Admin.UPDATE_USER_INFO_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case Admin.SET_TOKEN: {
      return {
        ...state,
        token: action.payload as reducerState["token"],
      };
    }
    case Admin.SET_USER_TOKEN: {
      return {
        ...state,
        userToken: action.payload as reducerState["userToken"],
      };
    }

    case Admin.CLEAR_ERR: {
      return {
        ...state,
        error: [],
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        token: "",
        userToken: "",
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        token: "",
        userToken: "",
      };
    }
    default:
      return state;
  }
};
