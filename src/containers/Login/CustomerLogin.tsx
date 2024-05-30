import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import ButtonComponent from "../../components/ButtonComponent";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import * as yup from "yup";
import { RootState } from "../../reduxStore/store";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { customerLogin, settingUserToken } from "../../reduxStore/Actions";
import { useNavigate } from "react-router-dom";

function CustomerLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigateScreen = useNavigate();
  const customerLoginData = useAppSelector(
    (state: RootState) => state.customerLogin.customerloginData
  );
  const token = customerLoginData && customerLoginData?.headers?.authorization;
  const passWordHandler = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  type userDataProps = {
    email: string;
    password: string;
  };
  const loginRequest = (user: userDataProps) => {
    const payload = {
      user,
    };
    dispatch(customerLogin(payload));
  };

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("userkey", JSON.stringify(token));
      window.localStorage.setItem(
        "userData",
        JSON.stringify(customerLoginData)
      );
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      let x = window.localStorage.getItem("userkey");
      dispatch(settingUserToken(x));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      navigateScreen("UserInfo");
    }
  }, [token]);

  return (
    <div
      role="customerRootView"
      style={{ ...styles.loginView, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          loginRequest(values);
          resetForm({});
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form style={{ ...styles.formStyle, flexDirection: "column" }}>
            <label style={styles.emailLabel} htmlFor="email">
              Email
            </label>
            <div className="form-control border-0  border-bottom border-light bg-transparent">
              <Field
                name="email"
                className="form-control border-0 shadow-none bg-transparent text-light "
              />
            </div>
            <div style={styles.userEmailErr}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={styles.userPassLabel} htmlFor="password">
              Password
            </label>
            <div
              style={styles.passwordView}
              className="form-control border-0  border-bottom border-light bg-transparent  "
            >
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control border-0 shadow-none bg-transparent text-light h-25 "
              />
              <div style={{ right: -10 }}>
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => passWordHandler()}
                    style={{ ...styles.iconStyle, color: "white" }}
                  />
                ) : (
                  <IoEyeOffOutline
                    style={{ ...styles.iconStyle, color: "white" }}
                    onClick={() => passWordHandler()}
                  />
                )}
              </div>
            </div>

            <div style={{ marginTop: 5, marginBottom: 5 }}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="Login"
                backgroundColor="white"
                color="black"
                fontWeight="bolder"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CustomerLogin;
