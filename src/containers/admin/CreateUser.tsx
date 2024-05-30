import React from "react";
import { styles } from "../Login/LoginStyle";
import { createUserStyle } from "./AdminStyle";
import TextComponent from "../../components/TextComponent";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import ButtonComponent from "../../components/ButtonComponent";
import { craeteUserAction } from "../../reduxStore/Actions";
import { useAppDispatch, useAppSelector } from "../../reduxStore/hooks";
import { RootState } from "../../reduxStore/store";
import { userDataProps } from "./adminTypes";

function CreateUser() {
  const token = useAppSelector((state: RootState) => state.admin.token);
  const dispatch = useAppDispatch();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    gender: "",
    role_id: "",
    contact_no: "",
  };
  const validationSchema = yup.object({
    first_name: yup
      .string()
      .required("First Name is a required field")
      .min(3, "First Name must be at least 3 characters")
      .matches(/^[A-Za-z]+$/, "Please remove any number or special character"),
    last_name: yup
      .string()
      .required()
      .min(5)
      .matches(/^[A-Za-z]+$/, "Please remove any number or special character"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Mail is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    address: yup.string().required(),
    dob: yup.string().required(),
    gender: yup.string().required(),
    role_id: yup.number().required(),
    contact_no: yup.number().required().min(10, "Envalid Number"),
  });

  const createUserRequest: any = (user: userDataProps) => {
    const payload = {
      user: user,
    };
    dispatch(craeteUserAction(token, payload));
    alert("user craeted!!!");
  };

  return (
    <div
      role="rootView"
      style={{ ...createUserStyle.container, flexDirection: "column" }}
    >
      <div style={createUserStyle.title}>
        <TextComponent
          fontFamily="fantasy"
          color="black"
          text="Customer Information"
          textAlign="center"
          fontSize={20}
          fontWeight="bolder"
        />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          createUserRequest(values);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form
            style={{ ...createUserStyle.formStyle, flexDirection: "column" }}
          >
            <label style={createUserStyle.labelStyle} htmlFor="first_name">
              First Name
            </label>

            <Field
              name="first_name"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="first_name"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="last_name">
              Last Name
            </label>
            <Field
              name="last_name"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="last_name"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="assignee">
              Email
            </label>
            <Field
              name="email"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="due_date">
              Password
            </label>
            <Field
              name="password"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="due_date">
              Address
            </label>
            <Field
              name="address"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="address"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="due_date">
              Date of Birth
            </label>
            <Field
              name="dob"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="dob"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="due_date">
              Gender
            </label>
            <Field
              name="gender"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="gender"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="role_id">
              Role Id
            </label>
            <Field
              name="role_id"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={createUserStyle.labelStyle}>
              <ErrorMessage
                name="role_id"
                component={"div"}
                className="text-danger"
              />
            </div>
            <label style={createUserStyle.labelStyle} htmlFor="contact_no">
              Phone Number
            </label>
            <Field
              name="contact_no"
              className="form-control border-0 shadow-none bg-light  text-dark border-bottom border-dark"
            />
            <div style={{ marginBottom: 5, marginTop: 5 }}>
              <ErrorMessage
                name="contact_no"
                component={"div"}
                className="text-danger"
              />
            </div>

            <div style={{ ...styles.btnView, marginBottom: 20 }}>
              <ButtonComponent
                btnText="create User"
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

export default CreateUser;
