import React from "react";
import UniversalForm from "../../components/UniversalForm";
import { useAuth } from "../../redux/auth/useAuth";

const VerifyEmail = () => {
  const { handleVerifyEmail, isVerifyEmailLoading } = useAuth();
  const fields = [{ name: "otp", label: "Code", required: true }];
  const message = "Enter code we have been set to yor email";

  return (
    <UniversalForm
      fields={fields}
      onSubmit={handleVerifyEmail}
      isLoading={isVerifyEmailLoading}
      formText="Send Code"
      message={message}
    />
  );
};

export default VerifyEmail;
