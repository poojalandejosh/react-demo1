import { Admin } from "../../Type";
import { custListProps } from "./Types";

const initialState: custListProps = {
  customerListLoading: false,
  customerList: [],
  customerListErr: [],
  userDeletedLoading: false,
  userDeleted: [],
  userDeletedErr: [],
};

export const customerListReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case Admin.CUSTOMER_LIST_REQUEST: {
      return {
        ...state,
        customerListLoading: true,
      };
    }
    case Admin.CUSTOMER_LIST_SUCCESS: {
      return {
        ...state,
        customerList: action.payload as custListProps["customerList"],
        loading: false,
      };
    }
    case Admin.CUSTOMER_LIST_FAILURE: {
      return {
        ...state,
        customerListErr: action.payload as custListProps["customerListErr"],
        customerListLoading: false,
      };
    }
    case Admin.ADMIN_LOGOUT: {
      return {
        customerListLoading: false,
        customerList: [],
        customerListErr: [],
      };
    }
    case Admin.CUSTOMER_LOGOUT: {
      return {
        customerListLoading: false,
        customerList: [],
        customerListErr: [],
      };
    }
    case Admin.DELETE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Admin.DELETE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        userDeleted: action.payload,
        loading: false,
      };
    }
    case Admin.DELETE_CUSTOMER_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    case Admin.DELETE_SINGLE_USER: {
      let newListData = [...state?.customerList];
      let newDeleteData = newListData?.filter((itm) => {
        return newListData.indexOf(itm) !== action.payload;
      });
      return {
        ...state,
        customerList: newDeleteData,
        loading: false,
      };
    }

    default:
      return state;
  }
};
