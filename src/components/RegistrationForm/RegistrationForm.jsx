import React from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.formContainer}>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
        }}
        onSubmit={(values, options) => {
          console.log(values);
          dispatch(registerThunk(values));
          options.resetForm();
        }}
      >
        <Form className={s.form}>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="j.doe@example.com" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="12345678Jane!"
            type="password"
          />
          <button type="submit">Submit</button>
          <p>
            You already have account? <Link to="/login">Log in!</Link>{" "}
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
