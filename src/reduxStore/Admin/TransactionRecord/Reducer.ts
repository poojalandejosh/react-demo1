import { Admin } from "../../Type";
import { transactionRecordProps } from "./Types";
const adminStoreData = window.localStorage.getItem("adminData");

const initialState: transactionRecordProps = {
  transactionsDataLoading: false,
  transactionsData: [],
  transactionsDataErr: [],
};

export const transactionReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.TRANSACTION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.TRANSACTION_SUCCESS: {
      return {
        ...state,
        transactionsData:
          action.payload as transactionRecordProps["transactionsData"],
        loading: false,
      };
    }
    case Admin.TRANSACTION_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        transactionsDataLoading: false,
        transactionsData: [],
        transactionsDataErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        transactionsDataLoading: false,
        transactionsData: [],
        transactionsDataErr: [],
      };
    }
    default:
      return state;
  }
};
