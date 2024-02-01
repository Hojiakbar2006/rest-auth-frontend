// components/pages/RegisterPage.js
import React from "react";
import UniversalForm from "../../components/UniversalForm";
import { useAuth } from "../../redux/auth/useAuth";

const ResetPassword = () => {
  const { handleResetPassword, isResetPasswordLoading } = useAuth();

  const fields = [
    { name: "email", label: "Email", required: true, type: "email" },
  ];
  const message = "Enter your email we have been sent link for reset password";

  return (
    <UniversalForm
      fields={fields}
      onSubmit={handleResetPassword}
      isLoading={isResetPasswordLoading}
      formText="Send"
      message={message}
    />
  );
};

export default ResetPassword;
