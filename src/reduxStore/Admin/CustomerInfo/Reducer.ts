import { singleUserDataInitialState } from "../../ReduxType";
import { Admin } from "../../Type";
import { createUserProps } from "../CreateUser/Types";
import { singleUserProps } from "./Types";

const initialState: singleUserProps = {
  singleUserDataLoading: false,
  singleUserData: window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData") || "{}")
    : singleUserDataInitialState,
  singleUserDataErr: [],
};

export const SingleUserReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.SINGLE_CUSTOMER_REQUEST: {
      return {
        ...state,
        singleUserDataLoading: true,
      };
    }
    case Admin.SINGLE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        singleUserData: action.payload as singleUserProps["singleUserData"],
        loading: false,
      };
    }
    case Admin.SINGLE_CUSTOMER_FAILURE: {
      return {
        ...state,
        singleUserDataErr: action.payload,
        singleUserDataLoading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        singleUserDataLoading: false,
        singleUserData: singleUserDataInitialState,
        singleUserDataErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        singleUserDataLoading: false,
        singleUserData: singleUserDataInitialState,
        singleUserDataErr: [],
      };
    }

    default:
      return state;
  }
};
