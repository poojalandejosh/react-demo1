import React, { useEffect, useState } from "react";
import { styles } from "./LoginStyle";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import ButtonComponent from "../../components/ButtonComponent";
import { adminLogin, settingToken } from "../../reduxStore/Actions";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const adminLoginData = useAppSelector(
    (state: RootState) => state.adminLogin.adminloginData
  );
  const token = adminLoginData && adminLoginData?.headers?.authorization;
  const navigateScreen = useNavigate();

  useEffect(() => {
    if (adminLoginData) {
      window.localStorage.setItem("key", JSON.stringify(token));
      window.localStorage.setItem("adminData", JSON.stringify(adminLoginData));
    }
  }, [adminLoginData]);

  const initialValues = {
    email: "",
    password: "",
  };

  type userDataProps = {
    email: string;
    password: string;
  };

  useEffect(() => {
    if (token) {
      let x = window.localStorage.getItem("key");
      dispatch(settingToken(x));
    }
  }, [token]);

  const loginRequest = (user: userDataProps) => {
    const payload = {
      user,
    };
    dispatch(adminLogin(payload));
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

  const passWordHandler = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (token) {
      navigateScreen("Customer List");
    }
  }, [token]);

  return (
    <div role="adminRoot" style={styles.adminLoginView}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          loginRequest(values);
          resetForm({});
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form
            style={{
              flexDirection: "column",
              display: "flex",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
            }}
          >
            <label style={styles.adminLabel} htmlFor="email">
              Email
            </label>
            <div className="form-control border-0  border-bottom border-dark bg-transparent">
              <Field
                name="email"
                className="form-control border-0 shadow-none    bg-transparent text-dark "
              />
            </div>
            <div style={styles.adminEmailErr}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={styles.adminLabel} htmlFor="password">
              Password
            </label>
            <div
              style={styles.passwordView}
              className="form-control border-0  border-bottom border-dark bg-transparent  "
            >
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control border-0 shadow-none bg-transparent text-dark h-25 "
              />
              <div style={{ right: -10 }}>
                {showPassword ? (
                  <IoEyeOutline
                    onClick={() => passWordHandler()}
                    style={styles.iconStyle}
                  />
                ) : (
                  <IoEyeOffOutline
                    style={styles.iconStyle}
                    onClick={() => passWordHandler()}
                  />
                )}
              </div>
            </div>

            <div style={styles.adminPassErr}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="Login"
                backgroundColor="grey"
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

export default AdminLogin;
