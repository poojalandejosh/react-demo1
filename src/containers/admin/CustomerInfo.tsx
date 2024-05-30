import React, { useEffect } from "react";
import InputAndLabel from "../../components/InputAndLabel";
import TextComponent from "../../components/TextComponent";
import { customerInfoStyle } from "./AdminStyle";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { getSingleCustomer } from "../../reduxStore/Actions";
import DataNotFoundComponent from "../../components/DataNotFoundComponent";

function CustomerInfo() {
  const { id } = useParams();
  const token = useAppSelector((state: RootState) => state.admin.token);
  const dispatch = useAppDispatch();
  const err = useAppSelector(
    (state: RootState) => state.singleUser.singleUserDataErr
  );
  const user = useAppSelector(
    (state: RootState) => state.singleUser.singleUserData
  );

  useEffect(() => {
    dispatch(getSingleCustomer(id, token));
  }, []);

  useEffect(() => {
    if (err?.response) {
      if (err?.response?.status == "404") {
        alert("Data Not found ");
      } else {
        alert(err?.response?.data);
      }
    }
  }, [err]);

  return (
    <div role="custInfoView" style={customerInfoStyle.mainView}>
      {err?.response?.status == "404" ? (
        <DataNotFoundComponent />
      ) : (
        <div
          style={{
            ...customerInfoStyle.componentView,
            flexDirection: "column",
          }}
        >
          <TextComponent
            fontFamily="fantasy"
            color="black"
            text="Customer info"
            textAlign="center"
            fontSize={20}
            fontWeight="bolder"
          />
          <div
            style={{
              ...customerInfoStyle.inputAndLabelView,
              flexDirection: "column",
            }}
          >
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Name"
              type="text"
              alignItems="start"
              value={`${user?.first_name} ${user?.last_name}`}
              // value="pooja lande"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />

            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Email"
              type="text"
              alignItems="start"
              value={user?.email}
              // value="lmskdkd@gmail.com"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Contact"
              type="text"
              alignItems="start"
              value={user?.contact_no}
              // value="8976453212"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Address"
              type="text"
              alignItems="start"
              // value={user?.address}
              value="pune maharastra"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Date of Birth"
              type="text"
              alignItems="start"
              value={user?.dob}
              // value="1999-09-04"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Gender"
              type="text"
              alignItems="start"
              value={user?.gender}
              // value="female"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
            <InputAndLabel
              flexDirection="column"
              color="black"
              labelName="Role"
              type="text"
              alignItems="start"
              value="Customer"
              borderBottom="1px solid rgb(128, 128, 128)"
              width="80%"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerInfo;
