import React from "react";
import { Link } from "react-router-dom";
import { adminLogout, customerLogout } from "../reduxStore/Actions";
import { IoMdLogOut } from "react-icons/io";
import { styles } from "./NavStyle";
import { useAppSelector, useAppDispatch } from "../reduxStore/hooks";
import { RootState } from "../reduxStore/store";

function HorizontalNav() {
  const token = useAppSelector((state: RootState) => state.admin.token);
  const userToken = useAppSelector((state: RootState) => state.admin.userToken);

  return (
    <div role="mainNavView" style={styles.container}>
      <ul style={{ ...styles.unOrderList, flexDirection: "row" }}>
        {token ? <AdminNav /> : userToken ? <CustomerNav /> : <LoginNav />}
      </ul>
    </div>
  );
}

export default HorizontalNav;

export const LoginNav = () => {
  return (
    <div role="loginNav">
      <li style={styles.loginView}>
        <Link style={styles.loginLink} to="/">
          Login
        </Link>
      </li>
    </div>
  );
};
export const AdminNav = () => {
  const dispatch = useAppDispatch();

  const logoutAdmin = () => {
    window.localStorage.clear();
    dispatch(adminLogout());
  };
  return (
    <>
      <div
        role="adminNavView"
        style={{ ...styles.adminView, flexDirection: "row" }}
      >
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Customer List">
            Customer List
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="Transaction">
            Transaction
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link style={styles.linkStyle} to="/Create User">
            create user
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link style={styles.linkStyle} to="/" onClick={() => logoutAdmin()}>
            <IoMdLogOut size={20} />
          </Link>
        </li>
      </div>
    </>
  );
};

export const CustomerNav = () => {
  const dispatch = useAppDispatch();

  const logoutcustomer = () => {
    window.localStorage.clear();
    dispatch(customerLogout());
  };
  return (
    <>
      <div
        role="custNavView"
        style={{ ...styles.customerNavView, flexDirection: "row" }}
      >
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="UserInfo">
            Profile
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Make Transaction">
            Transaction
          </Link>
        </li>
        <li style={styles.paddingStyle}>
          <Link style={styles.linkStyle} to="/Transaction history">
            Transaction History
          </Link>
        </li>
        <li style={styles.bottomStyle}>
          <Link
            style={styles.linkStyle}
            to="/"
            onClick={() => logoutcustomer()}
          >
            <IoMdLogOut size={20} />
          </Link>
        </li>
      </div>
    </>
  );
};
