import React from "react";
import DocumentTitle from "../../components/DocumentTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css"

const RegistrationPage = () => {

  return (
    <main className={s.regContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm/>
    </main>
  );
};

export default RegistrationPage;
