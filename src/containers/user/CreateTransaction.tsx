import React, { ChangeEvent, useEffect, useState } from "react";
import TextComponent from "../../components/TextComponent";
import InputAndLabel from "../../components/InputAndLabel";
import ButtonComponent from "../../components/ButtonComponent";
import { createTransactionStyle } from "./UserStyles";
import { RootState } from "../../reduxStore/store";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import {
  clearTransaction,
  craeteTransactionRequest,
  getUserTransaction,
} from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";

function CreateTransaction() {
  const token = useAppSelector((state: RootState) => state.admin.userToken);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("credit");
  const [bankDetails, setBankDetails] = useState<string>("Netbanking");
  const [amount, setAmount] = useState<number>(0);
  const [accountId, setAccountId] = useState<number>(0);
  const navigateScreen = useNavigate();
  const userData = useAppSelector(
    (state: RootState) => state.customerLogin.customerloginData
  );
  const createData = useAppSelector(
    (state: RootState) => state.createTransaction.createTransaction
  );
  const data = userData && userData?.data?.data;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  type transactionProps = {
    transaction: {
      transaction_type: string;
      details: string;
      amount: number;
      account_id: number;
    };
  };
  const transactionCreate: any = () => {
    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }
    if (isNaN(amount)) {
      alert("Please Enter Valid Amount");
    } else if (value == "Debit" && amount < 0) {
      alert("Transaction not possible");
    } else {
      const payload: transactionProps = {
        transaction: {
          transaction_type: capitalizeFirstLetter(value),
          details: bankDetails,
          amount: amount,
          account_id: accountId,
        },
      };
      dispatch(craeteTransactionRequest(token, payload));
      if (createData) {
        alert("Transaction Created!!");
        navigateScreen("/Transaction history");
      }
    }
  };

  useEffect(() => {
    dispatch(getUserTransaction(data?.id, token));
  }, [token]);

  useEffect(() => {
    return () => {
      dispatch(clearTransaction());
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearTransaction());
    };
  }, []);

  return (
    <div
      role="transactionView"
      style={{ ...createTransactionStyle.container, flexDirection: "column" }}
    >
      <div style={{ marginTop: 30 }}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Transaction"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
          fontStyle="inherit"
        />
      </div>

      <div
        style={{
          ...createTransactionStyle.transactionDropdown,
          flexDirection: "column",
        }}
      >
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Transaction Type"
          textAlign="left"
          fontSize={16}
          fontWeight="normal"
        />
        <select
          style={createTransactionStyle.dropdownView}
          value={value}
          onChange={(e) => handleChange(e)}
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <InputAndLabel
        color="black"
        labelName="Details"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={bankDetails}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBankDetails(e.target.value)
        }
        width="50%"
      />

      <InputAndLabel
        color="black"
        labelName="Amount"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={amount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAmount(parseInt(e.target.value))
        }
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Account Id"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={accountId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAccountId(parseInt(e.target.value))
        }
        width="50%"
      />
      <div style={{ marginTop: 50 }}>
        <ButtonComponent
          onClick={transactionCreate}
          btnText="Create Transaction"
          backgroundColor="grey"
          color="white"
        />
      </div>
    </div>
  );
}

export default CreateTransaction;
