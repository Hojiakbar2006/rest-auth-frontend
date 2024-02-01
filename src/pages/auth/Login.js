// components/pages/RegisterPage.js
import React from "react";
import UniversalForm from "../../components/UniversalForm";
import { useAuth } from "../../redux/auth/useAuth";

const Login = () => {
  const { handleLogin, isLoginLoading } = useAuth();
  const fields = [
    { name: "email", label: "Email", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ];
  const link = {
    message: "Don't you have an account ?",
    url: "/register",
  };

  return (
    <UniversalForm
      fields={fields}
      onSubmit={handleLogin}
      isLoading={isLoginLoading}
      formText="Login"
      link={link}
    />
  );
};

export default Login;
