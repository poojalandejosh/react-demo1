import React from "react";
import { combineReducers } from "@reduxjs/toolkit";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./Reducer";
import { AdminLoginReducer } from "./AdminLogin/LoginReducer";
import { CustomerLoginReducer } from "./CustomerLogin.ts/Reducer";
import { CreateUserReducer } from "./Admin/CreateUser/Reducer";
import { SingleUserReducer } from "./Admin/CustomerInfo/Reducer";
import { customerListReducer } from "./Admin/CustomerList/Reducer";
import { transactionReducer } from "./Admin/TransactionRecord/Reducer";
import { createTransactionReducer } from "./User/CreateTransaction/Reducer";
import { AllTransactionReducer } from "./User/TransactionHistory/Reducer";

const rootReducers = combineReducers({
  admin: AdminReducer,
  adminLogin: AdminLoginReducer,
  customerLogin: CustomerLoginReducer,
  crateUser: CreateUserReducer,
  singleUser: SingleUserReducer,
  custList: customerListReducer,
  transaction: transactionReducer,
  createTransaction: createTransactionReducer,
  allTran: AllTransactionReducer,
});

export const store = createStore(rootReducers, {}, applyMiddleware(thunk));
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
