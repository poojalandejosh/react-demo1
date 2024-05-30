import React, { useEffect, useMemo, useState } from "react";
import InputAndLabel from "../../components/InputAndLabel";
import { transactionRecordStyle } from "./AdminStyle";
import TextComponent from "../../components/TextComponent";
import CustomerCard from "../../components/CustomerCard";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { deleteUser, getCustomerList } from "../../reduxStore/Actions";
import { RootState } from "../../reduxStore/store";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";

function CustomerList() {
  const token = useAppSelector((state: RootState) => state.admin.token);
  const dispatch = useAppDispatch();
  const customerList = useAppSelector(
    (state: RootState) => state.custList.customerList
  );
  // const loading = useAppSelector((state) => state?.admin?.customerListLoading);
  const err = useAppSelector(
    (state: RootState) => state?.custList?.customerListErr
  );

  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    if (err?.length) {
      if (err?.response?.status == "401") {
        alert("Unauthorized user");
      }
    }
  }, [err]);
  useEffect(() => {
    if (token) {
      dispatch(getCustomerList(token));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      dispatch(getCustomerList(token));
    }
  }, [token]);

  const ondeleteClick = (ind: number) => {
    dispatch(deleteUser(ind));
  };

  const filteredList = useMemo(() => {
    return customerList?.filter?.((item) => {
      return item?.first_name?.includes(inputVal);
    });
  }, [customerList, inputVal]);

  return (
    <div role="custListView" style={{ margin: 20 }}>
      {/* <LoadingComponent /> */}

      <div style={transactionRecordStyle.componentView}>
        <InputAndLabel
          color="black"
          labelName="Enter Customer Name"
          type="text"
          borderBottom="2px solid rgb(0, 0, 0)"
          flexDirection="column"
          width="80"
          value={inputVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputVal(e.target.value)
          }
        />
      </div>
      {filteredList?.length ? (
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Customers Details"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
        />
      ) : null}

      {filteredList?.length <= 0 && err?.response && <DataNotFoundComponent />}

      {filteredList &&
        filteredList?.map?.((data, ind) => {
          return (
            <CustomerCard
              key={data?.id}
              data={data}
              onClick={() => ondeleteClick(ind)}
            />
          );
        })}
    </div>
  );
}

export default CustomerList;
