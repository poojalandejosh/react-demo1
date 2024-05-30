import { Admin } from "./Type";
import axios, { AxiosError, AxiosResponse } from "axios";
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {
  craeteTransactionRequestProps,
  reducerState,
  updateUserInfoProps,
} from "./ReduxType";
import { adminLoginProps } from "./AdminLogin/LoginReduxTypes";
import { customerLoginProps } from "./CustomerLogin.ts/Types";
import { craeteUserActionProps } from "./Admin/CreateUser/Types";
import { singleUserProps } from "./Admin/CustomerInfo/Types";
import { custListProps } from "./Admin/CustomerList/Types";
import { transactionProps } from "../reduxStore/User/TransactionHistory/Type";
import { transactionRecordProps } from "./Admin/TransactionRecord/Types";

const adminLoginRequest = () => {
  return {
    type: Admin.ADMIN_LOGIN_REQUEST,
  };
};
export const adminLoginSucess = (data: adminLoginProps["adminloginData"]) => {
  return {
    type: Admin.ADMIN_LOGIN_SUCCESS,
    payload: data,
  };
};
export const adminLoginFailure = (err: AxiosError) => {
  return {
    type: Admin.ADMIN_LOGIN_FAILURE,
    payload: err,
  };
};
export const clearAdminLoginData = (type: string) => {
  return {
    type: Admin.ADMIN_LOGIN_CLEAR,
  };
};

export const customerLoginRequest = () => {
  return {
    type: Admin.CUSTOMER_LOGIN_REQUEST,
  };
};
export const customerLoginSucess = (
  data: customerLoginProps["customerloginData"]
) => {
  return {
    type: Admin.CUSTOMER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const customerLoginFailure = (err: AxiosError) => {
  return {
    type: Admin.CUSTOMER_LOGIN_FAILURE,
    payload: err,
  };
};

export const cutomerListRequest = () => {
  return {
    type: Admin.CUSTOMER_LIST_REQUEST,
  };
};
export const cutomerListSucess = (data: custListProps["customerList"]) => {
  return {
    type: Admin.CUSTOMER_LIST_SUCCESS,
    payload: data,
  };
};
export const cutomerListFailure = (err: custListProps["customerListErr"]) => {
  return {
    type: Admin.CUSTOMER_LIST_FAILURE,
    payload: err,
  };
};

export const transactionRequest = () => {
  return {
    type: Admin.TRANSACTION_REQUEST,
  };
};
export const transactionSucess = (
  data: transactionRecordProps["transactionsData"]
) => {
  return {
    type: Admin.TRANSACTION_SUCCESS,
    payload: data,
  };
};
export const transactionFailure = (err: AxiosError) => {
  return {
    type: Admin.TRANSACTION_FAILURE,
    payload: err,
  };
};
export const clearTransaction: any = () => {
  return {
    type: Admin.CLEAR_TRANSACTION_DATA,
  };
};

export const singleCustRequest = () => {
  return {
    type: Admin.SINGLE_CUSTOMER_REQUEST,
  };
};
export const singleCustSucess = (data: singleUserProps["singleUserData"]) => {
  return {
    type: Admin.SINGLE_CUSTOMER_SUCCESS,
    payload: data,
  };
};
export const singleCustFailure: any = (err: AxiosError) => {
  return {
    type: Admin.SINGLE_CUSTOMER_FAILURE,
    payload: err,
  };
};

export const deleteCustomerRequest = () => {
  return {
    type: Admin.DELETE_CUSTOMER_REQUEST,
  };
};
export const deleteCustomerSucess = (data: AxiosResponse) => {
  return {
    type: Admin.DELETE_CUSTOMER_SUCCESS,
    payload: data,
  };
};
export const deleteCustomerFailure = (err: AxiosError) => {
  return {
    type: Admin.DELETE_CUSTOMER_FAILURE,
    payload: err,
  };
};
export const setLoginToken = (payload: string) => {
  return {
    type: Admin.SET_TOKEN,
    payload,
  };
};
export const deleteUser = (payload: number) => {
  return {
    type: Admin.DELETE_SINGLE_USER,
    payload,
  };
};

export const adminLogout = () => {
  return {
    type: Admin.ADMIN_LOGOUT,
  };
};

export const customerLogout = () => {
  return {
    type: Admin.CUSTOMER_LOGOUT,
  };
};
export const createTransactionRequest = () => {
  return {
    type: Admin.CREATE_TRANSACTION_REQUEST,
  };
};
export const createTransactionSucess = (data: AxiosResponse) => {
  return {
    type: Admin.CREATE_TRANSACTION_SUCCESS,
    payload: data,
  };
};
export const createTransactionFailure = (err: AxiosError) => {
  return {
    type: Admin.CREATE_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const getAllTransactionRequest = () => {
  return {
    type: Admin.ALL_TRANSACTION_REQUEST,
  };
};
export const getAllTransactionSucess = (
  data: transactionProps["allTransaction"]
) => {
  return {
    type: Admin.ALL_TRANSACTION_SUCCESS,
    payload: data,
  };
};
export const getAllTransactionFailure = (err: AxiosError) => {
  return {
    type: Admin.ALL_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const updateUserRequest = () => {
  return {
    type: Admin.UPDATE_USER_INFO_REQUEST,
  };
};
export const updateUserSucess = (data: AxiosResponse) => {
  return {
    type: Admin.UPDATE_USER_INFO_SUCCESS,
    payload: data,
  };
};
export const updateUserFailure = (err: AxiosError) => {
  return {
    type: Admin.UPDATE_USER_INFO_FAILURE,
    payload: err,
  };
};
export const transactionUserRequest = () => {
  return {
    type: Admin.GET_USER_TRANSACTION_REQUEST,
  };
};
export const transactionUserSucess = (payload: string) => {
  return {
    type: Admin.GET_USER_TRANSACTION_SUCCESS,
    payload,
  };
};
export const transactionUserFailure = (err: AxiosError) => {
  return {
    type: Admin.GET_USER_TRANSACTION_FAILURE,
    payload: err,
  };
};
export const createUserRequest = () => {
  return {
    type: Admin.CREATE_USER_REQUEST,
  };
};
export const createUserSucess = (data: AxiosResponse) => {
  return {
    type: Admin.CREATE_USER_SUCCESS,
    payload: data,
  };
};
export const createUserFailure = (err: AxiosError) => {
  return {
    type: Admin.CREATE_USER_FAILURE,
    payload: err,
  };
};
export const clearCreateUserResponse = () => {
  return {
    type: Admin.CLEAR_CREATE_USER_RESPONSE,
  };
};
export const clearErr = () => {
  return {
    type: Admin.CLEAR_ERR,
  };
};
export const settingToken: any = (payload: string) => {
  return {
    type: Admin.SET_TOKEN,
    payload,
  };
};
export const settingUserToken: any = (payload: string) => {
  return {
    type: Admin.SET_USER_TOKEN,
    payload,
  };
};

export const adminLogin: any = (data: adminLoginProps) => {
  return (dispatch: Dispatch) => {
    dispatch(adminLoginRequest());
    axios
      .post("http://localhost:3000/login", data)
      .then((res: AxiosResponse<adminLoginProps["adminloginData"]>) => {
        dispatch(adminLoginSucess(res));
      })
      .catch((err: AxiosError) => {
        dispatch(adminLoginFailure(err));
      });
  };
};

export const customerLogin: any = (data: customerLoginProps) => {
  return (dispatch: Dispatch) => {
    dispatch(customerLoginRequest());
    axios
      .post("http://localhost:3000/login", data)
      .then((res: AxiosResponse<customerLoginProps["customerloginData"]>) => {
        dispatch(customerLoginSucess(res));
      })
      .catch((err: AxiosError) => {
        dispatch(customerLoginFailure(err));
      });
  };
};

export const getCustomerList: any = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(cutomerListRequest());
    axios
      .get("http://localhost:3000/users", {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then((res: AxiosResponse<custListProps["customerList"]>) => {
        let data = res.data;
        dispatch(cutomerListSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(cutomerListFailure(err));
      });
  };
};

export const getSingleCustomer: any = (id: number, token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(singleCustRequest());
    axios
      .get(`http://localhost:3000/users/${id}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then((res: AxiosResponse<singleUserProps["singleUserData"]>) => {
        let data = res.data;
        dispatch(singleCustSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(singleCustFailure(err));
      });
  };
};
export const getTransaction: any = (id: string, token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(transactionRequest());
    axios
      .get(`http://localhost:3000/transactions?user_id=${id}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then(
        (res: AxiosResponse<transactionRecordProps["transactionsData"]>) => {
          let data = res.data;
          dispatch(transactionSucess(data));
        }
      )
      .catch((err: AxiosError) => {
        dispatch(transactionFailure(err));
      });
  };
};

export const deleteCustomer = (id: number, token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(deleteCustomerRequest());
    axios
      .delete(`http://localhost:3000/users/${id}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then((res: AxiosResponse) => {
        let data = res;
        dispatch(deleteCustomerSucess(data));
        getCustomerList(token);
      })
      .catch((err: AxiosError) => {
        dispatch(deleteCustomerFailure(err));
      });
  };
};
export const craeteTransactionRequest: any = (
  token: string,
  data: craeteTransactionRequestProps
) => {
  return (dispatch: Dispatch) => {
    dispatch(createTransactionRequest());
    axios({
      method: "post",
      url: "http://localhost:3000/transactions",
      headers: {
        authorization: JSON.parse(token),
      },
      data: data,
    })
      .then((res: AxiosResponse) => {
        let data = res.data;
        dispatch(createTransactionSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(createTransactionFailure(err));
      });
  };
};
export const getAllUsersTransaction: any = (id: number, token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(getAllTransactionRequest());
    axios
      .get(`http://localhost:3000/transactions?user_id=${id}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then((res: AxiosResponse<transactionProps["allTransaction"]>) => {
        let data = res.data;
        dispatch(getAllTransactionSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(getAllTransactionFailure(err));
      });
  };
};
export const updateUserInfo: any = (
  token: string,
  data: updateUserInfoProps,
  userId: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(updateUserRequest());
    axios({
      method: "put",
      url: `http://localhost:3000/users/${userId}`,
      headers: {
        authorization: JSON.parse(token),
      },
      data: data,
    })
      .then((res: AxiosResponse) => {
        let data = res.data;
        dispatch(updateUserSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(updateUserFailure(err));
      });
  };
};
export const getUserTransaction: any = (id: number, token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(transactionUserRequest());
    axios
      .get(`http://localhost:3000/transactions/${id}`, {
        headers: {
          authorization: JSON.parse(token),
        },
      })
      .then((res: AxiosResponse) => {
        let data = res.data;
        dispatch(transactionUserSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(transactionUserFailure(err));
      });
  };
};
export const craeteUserAction: any = (
  token: string,
  data: craeteUserActionProps
) => {
  return (dispatch: Dispatch) => {
    dispatch(createUserRequest());
    axios({
      method: "post",
      url: `http://localhost:3000/users`,
      headers: {
        authorization: JSON.parse(token),
      },
      data: data,
    })
      .then((res: AxiosResponse) => {
        let data = res.data;
        dispatch(createUserSucess(data));
      })
      .catch((err: AxiosError) => {
        dispatch(createUserFailure(err));
      });
  };
};
