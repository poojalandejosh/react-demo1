import { Admin } from "../../Type";
import { transactionProps } from "./Type";
const customerStoreData = window.localStorage.getItem("userData");

const initialState: transactionProps = {
  allTransactionLoading: false,
  allTransaction: [],
  allTransactionErr: [],
};

export const AllTransactionReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.ALL_TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.ALL_TRANSACTION_SUCCESS: {
      return {
        ...state,
        allTransaction: action.payload,
        loading: false,
      };
    }
    case Admin.ALL_TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        allTransactionLoading: false,
        allTransaction: [],
        allTransactionErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        allTransactionLoading: false,
        allTransaction: [],
        allTransactionErr: [],
      };
    }
    default:
      return state;
  }
};
