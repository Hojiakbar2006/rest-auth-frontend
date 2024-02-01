// import { useDispatch } from "react-redux";
// import { setUser, resetUser } from "./authSlice";
import {
  useRegisterMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useSetNewPasswordMutation,
} from "../api";
// import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export const useAuth = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const [verifyEmail, { isLoading: isVerifyEmailLoading }] =
    useVerifyEmailMutation();
  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [resetPassword, { isLoading: isResetPasswordLoading }] =
    useResetPasswordMutation();
  const [resetPasswordConfirm, { isLoading: isResetPasswordConfirmLoading }] =
    useResetPasswordConfirmMutation();
  const [setNewPassword, { isLoading: isSetNewPasswordLoading }] =
    useSetNewPasswordMutation();
  const { uidb64, token } = useParams();

  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyEmail = async (passcode) => {
    try {
      await verifyEmail(passcode);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (userData) => {
    try {
      const response = await login(userData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPassword = async (resetPasswordData) => {
    try {
      const response = await resetPassword(resetPasswordData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResetPasswordConfirm = async () => {
    try {
      const response = await resetPasswordConfirm();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetNewPassword = async (data) => {
    try {
      const response = await setNewPassword({ ...data, uidb64, token });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleRegister,
    handleVerifyEmail,
    handleLogin,
    handleResetPassword,
    handleResetPasswordConfirm,
    handleSetNewPassword,
    isRegisterLoading,
    isVerifyEmailLoading,
    isLoginLoading,
    isResetPasswordLoading,
    isResetPasswordConfirmLoading,
    isSetNewPasswordLoading,
  };
};
