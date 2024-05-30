import { Admin } from "../../Type";
import { createTransactionProps } from "./Type";

const initialState: createTransactionProps = {
  createTransactionLoading: false,
  createTransaction: [],
  createTransactionErr: [],
  singleTranLoading: false,
  singleTran: [],
  singleTranErr: [],
};

export const createTransactionReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.CREATE_TRANSACTION_REQUEST: {
      return {
        ...state,
        createTransactionLoading: true,
      };
    }
    case Admin.CREATE_TRANSACTION_SUCCESS: {
      return {
        ...state,
        createTransaction:
          action.payload as createTransactionProps["createTransaction"],
        loading: false,
      };
    }
    case Admin.CREATE_TRANSACTION_FAILURE: {
      return {
        ...state,
        createTransactionErr: action.payload,
        createTransactionLoading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_REQUEST: {
      return {
        ...state,
        singleTranLoading: true,
      };
    }
    case Admin.GET_USER_TRANSACTION_SUCCESS: {
      return {
        ...state,
        singleTran: action.payload,
        singleTranLoading: false,
      };
    }
    case Admin.GET_USER_TRANSACTION_FAILURE: {
      return {
        ...state,
        singleTranErr: action.payload,
        singleTranLoading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        createTransactionLoading: false,
        createTransaction: [],
        createTransactionErr: [],
        singleTranLoading: false,
        singleTran: [],
        singleTranErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        createTransactionLoading: false,
        createTransaction: [],
        createTransactionErr: [],
        singleTranLoading: false,
        singleTran: [],
        singleTranErr: [],
      };
    }

    default:
      return state;
  }
};
