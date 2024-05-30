import React, { useEffect } from "react";
import TextComponent from "../../components/TextComponent";
import { userInfoStyle } from "./UserStyles";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { getSingleCustomer } from "../../reduxStore/Actions";

function UserInfo() {
  const token = useAppSelector((state: RootState) => state.admin.userToken);
  const userData = useAppSelector(
    (state: RootState) => state.customerLogin.customerloginData
  );
  const data = useAppSelector(
    (state: RootState) => state.singleUser.singleUserData
  );

  const dispatch = useAppDispatch();
  const userID = userData?.data?.data?.id;

  useEffect(() => {
    dispatch(getSingleCustomer(userID, token));
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("userInfo", JSON.stringify(data));
    }
  }, [token]);

  return (
    <div role="userInfoView" style={userInfoStyle.container}>
      <div style={{ ...userInfoStyle.titleStyleView, flexDirection: "row" }}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="User Information"
          textAlign="left"
          fontSize={20}
          fontWeight="bolder"
        />
      </div>
      <div style={{ ...userInfoStyle.componentView, flexDirection: "row" }}>
        <div style={{ flexDirection: "column" }}>
          <div style={userInfoStyle.nameView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Name: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.first_name} ${data?.last_name}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.emailView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Email: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.email}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.addressView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Address: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.address}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.numberView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Contact Number"
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.contact_no}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
          <div style={userInfoStyle.dobView}>
            <TextComponent
              fontFamily="fantasy"
              color="black"
              text="Date of Birth: "
              textAlign="left"
              fontSize={16}
              fontWeight="bolder"
            />
            <div style={{ marginLeft: 10 }}>
              <TextComponent
                fontFamily="fantasy"
                color="black"
                text={`${data?.dob}`}
                textAlign="left"
                fontSize={16}
                fontWeight="normal"
              />
            </div>
          </div>
        </div>
      </div>
      <div style={userInfoStyle.navMsgView}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Do you want to update then "
          textAlign="left"
          fontSize={16}
          fontWeight="normal"
          fontStyle="inherit"
        />
        <Link to="/Update user" style={{ marginLeft: 5 }}>
          <TextComponent
            fontFamily="fantasy"
            color="purple"
            text="click here "
            textAlign="left"
            fontSize={16}
            fontWeight="normal"
            fontStyle="inherit"
          />
        </Link>
      </div>
    </div>
  );
}

export default UserInfo;
