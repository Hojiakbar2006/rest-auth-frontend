import React from "react";
import UniversalForm from "../../components/UniversalForm";
import { useAuth } from "../../redux/auth/useAuth";

const ResetPasswordConfirm = () => {
  const { handleSetNewPassword, isSetNewPasswordLoading } = useAuth();
  const fields = [
    { name: "password", label: "Password", required: true, type: "password" },
    {
      name: "confirm_password",
      label: "Confirm password",
      required: true,
      type: "password",
    },
  ];
  const message = "Enter code we have been set to yor email";

  return (
    <UniversalForm
      fields={fields}
      onSubmit={handleSetNewPassword}
      isLoading={isSetNewPasswordLoading}
      formText="Send Code"
      message={message}
    />
  );
};

export default ResetPasswordConfirm;
