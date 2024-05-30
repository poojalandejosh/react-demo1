import React, { useState } from "react";
import InputAndLabel from "../../components/InputAndLabel";
import { IoSearch } from "react-icons/io5";
import { transactionRecordStyle } from "./AdminStyle";
import TransactionCard from "../../components/TransactionCard";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { getTransaction } from "../../reduxStore/Actions";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";

function TransactionRecord() {
  const token = useAppSelector((state: RootState) => state.admin.token);
  const [custId, setCustId] = useState("");
  const dispatch = useAppDispatch();
  const dataTransaction = useAppSelector(
    (state: RootState) => state.transaction.transactionsData
  );
  const searchHandler = () => {
    dispatch(getTransaction(custId, token));
  };

  const setCustomerId = (val: string) => {
    setCustId(val);
  };
  return (
    <div role="transactionView" style={transactionRecordStyle.mainView}>
      {/* <LoadingComponent /> */}
      <div style={transactionRecordStyle.componentView}>
        <InputAndLabel
          color="black"
          labelName="Customer Id"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          width="80"
          value={custId}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCustomerId(e.target.value)
          }
        />
        <div style={transactionRecordStyle.searchView}>
          <IoSearch onClick={searchHandler} size={20} />
        </div>
      </div>
      {dataTransaction?.length <= 0 && <DataNotFoundComponent />}

      <div style={transactionRecordStyle.transactionView}>
        {dataTransaction &&
          dataTransaction?.map((data) => {
            return <TransactionCard data={data} />;
          })}
      </div>
    </div>
  );
}

export default TransactionRecord;
