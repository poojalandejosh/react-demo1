import React, { useEffect } from "react";
import { transactionHistoryStyle } from "./UserStyles";
import CustomerCard from "../../components/CustomerCard";
import TransactionCard from "../../components/TransactionCard";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { getAllUsersTransaction } from "../../reduxStore/Actions";

function TransactionHistory() {
  const token = useAppSelector((state: RootState) => state.admin.userToken);
  const dispatch = useAppDispatch();
  const data = useAppSelector(
    (state: RootState) => state.customerLogin.customerloginData
  );
  const userID = data?.data?.data?.id;
  const transactionData = useAppSelector(
    (state) => state.allTran.allTransaction
  );

  useEffect(() => {
    dispatch(getAllUsersTransaction(userID, token));
  }, []);

  return (
    <div role="tranHistoryRole">
      <div style={transactionHistoryStyle.componentView}>
        <div style={transactionHistoryStyle.cardView}>
          <CustomerCard data={data?.data?.data} showBtn="false" />
        </div>
        {transactionData &&
          transactionData?.map((data: any) => {
            return <TransactionCard data={data} />;
          })}
      </div>
    </div>
  );
}

export default TransactionHistory;
