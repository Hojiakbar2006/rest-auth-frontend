// components/pages/RegisterPage.js
import React from "react";
import UniversalForm from "../../components/UniversalForm";
import { useAuth } from "../../redux/auth/useAuth";

const Register = () => {
  const { handleRegister, isRegisterLoading } = useAuth();

  const fields = [
    { name: "first_name", label: "First Name" },
    { name: "last_name", label: "Last Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "password2", label: "Password confirm", type: "password" },
  ];
  const link = {
    message: "Do you have an account ?",
    url: "/login",
  };

  return (
    <UniversalForm
      fields={fields}
      onSubmit={handleRegister}
      isLoading={isRegisterLoading}
      formText="Register"
      link={link}
    />
  );
};

export default Register;
