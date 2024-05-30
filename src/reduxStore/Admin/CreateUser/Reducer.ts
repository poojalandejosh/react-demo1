import { Admin } from "../../Type";
import { createUserProps } from "./Types";
const customerStoreData = window.localStorage.getItem("userData");

const initialState: createUserProps = {
  createUserResLoading: false,
  createUserRes: [],
  createUserResErr: [],
};

export const CreateUserReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.CREATE_USER_REQUEST: {
      return {
        ...state,
        createUserResLoading: true,
      };
    }
    case Admin.CREATE_USER_SUCCESS: {
      return {
        ...state,
        createUserRes: action.payload,
        createUserResLoading: false,
      };
    }
    case Admin.CREATE_USER_FAILURE: {
      return {
        ...state,
        createUserResErr: action.payload,
        createUserResLoading: false,
      };
    }
    case Admin.CLEAR_CREATE_USER_RESPONSE: {
      return {
        ...state,
        createUserResLoading: false,
        createUserResErr: [],
        createUserRes: [],
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        createUserResLoading: false,
        createUserRes: [],
        createUserResErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        createUserResLoading: false,
        createUserRes: [],
        createUserResErr: [],
      };
    }
    default:
      return state;
  }
};
