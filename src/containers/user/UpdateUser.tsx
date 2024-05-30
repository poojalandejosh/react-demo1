import React, { useState } from "react";
import TextComponent from "../../components/TextComponent";
import InputAndLabel from "../../components/InputAndLabel";
import { updateUserStyle } from "./UserStyles";
import ButtonComponent from "../../components/ButtonComponent";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { updateUserInfo } from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
  const token = useAppSelector((state: RootState) => state.admin.userToken);
  const data = useAppSelector(
    (state: RootState) => state.singleUser.singleUserData
  );
  const dispatch = useAppDispatch();
  const userData = useAppSelector(
    (state: RootState) => state.customerLogin.customerloginData
  );
  const userID = userData?.data?.data?.id;
  const userInfo = useAppSelector(
    (state: RootState) => state.singleUser.singleUserData
  );

  const navigateScreen = useNavigate();
  const [firstName, setFirstname] = useState<string>(data?.first_name);
  const [firstNameErr, setFirstnameErr] = useState<string>("");
  const [lastName, setLastName] = useState<string>(data?.last_name);
  const [lastNameErr, setLastNameErr] = useState<string>("");
  const [number, setNumber] = useState<string>(data?.contact_no);
  const [numberErr, setNumberErr] = useState<string>("");
  const [address, setAddress] = useState<string>(data?.address);
  const [dob, setDOB] = useState<string>(data?.dob);
  const [gender, setGender] = useState<string>(data?.gender);

  type userProps = {
    user: {
      first_name: string;
      last_name: string;
      contact_no: string;
      address: string;
      dob: string;
      gender: string;
    };
  };
  const updateClick: any = () => {
    const NAME_REGEX = /^[a-zA-Z]+$/;
    const NUMBER_REGEX = /^[0-9]+$/;
    const payload: userProps = {
      user: {
        first_name: firstName,
        last_name: lastName,
        contact_no: number,
        address: address,
        dob: dob,
        gender: gender,
      },
    };
    if (!NAME_REGEX.test(firstName)) {
      setFirstnameErr("Please Enter valid First Name");
    } else if (!NAME_REGEX.test(lastName)) {
      setLastNameErr("Please Enter valid Last Name");
    } else if (!NUMBER_REGEX.test(number)) {
      setNumberErr("Please Enter Valid Number");
    } else {
      if (
        firstName == userInfo?.first_name &&
        lastName == userInfo?.last_name &&
        number == userInfo?.contact_no &&
        address == userInfo?.address &&
        dob == userInfo?.dob &&
        gender == userInfo?.gender
      ) {
        navigateScreen("/UserInfo");
      } else {
        dispatch(updateUserInfo(token, payload, userID));
        setFirstnameErr("");
        setLastNameErr("");
        setNumberErr("");
        navigateScreen("/UserInfo");
      }
    }
  };

  return (
    <div
      role="updateDataView"
      style={{ ...updateUserStyle.container, flexDirection: "column" }}
    >
      <TextComponent
        fontFamily="fantasy"
        color="black"
        text="Update Information"
        textAlign="left"
        fontSize={20}
        fontWeight="bolder"
        fontStyle="inherit"
      />
      <InputAndLabel
        color="black"
        labelName="First Name"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFirstname(e.target.value)
        }
        width="50%"
      />
      {firstNameErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={firstNameErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Last Name"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLastName(e.target.value)
        }
        width="50%"
      />
      {lastNameErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={lastNameErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Contact Number"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber(e.target.value)
        }
        width="50%"
      />
      {numberErr && (
        <TextComponent
          fontFamily="fantasy"
          color="red"
          text={numberErr}
          textAlign="left"
          fontSize={14}
          fontWeight="normal"
        />
      )}
      <InputAndLabel
        color="black"
        labelName="Address"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddress(e.target.value)
        }
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Date of Birth"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={dob}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDOB(e.target.value)
        }
        width="50%"
      />
      <InputAndLabel
        color="black"
        labelName="Gender"
        type="text"
        borderBottom="0.5px solid rgb(0, 0, 0.5)"
        flexDirection="column"
        value={gender}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setGender(e.target.value)
        }
        width="50%"
      />
      <div style={{ marginTop: 60, marginBottom: 20 }}>
        <ButtonComponent
          onClick={updateClick}
          btnText="Update Profile"
          backgroundColor="grey"
          color="white"
        />
      </div>
    </div>
  );
}

export default UpdateUser;
