import React from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css"
const LoginForm = () => {
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
          dispatch(loginThunk(values));
          options.resetForm();
        }}
      >
        <Form className={s.form}>
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
          <p> Do not have an account yet? <Link to='/register'>Sign up!</Link> </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
