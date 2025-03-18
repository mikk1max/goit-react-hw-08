import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css"

const LoginPage = () => {
  return (
    <main className={s.logContainer}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
