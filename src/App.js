import React from "react";
import "./assets/global.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  ResetPassword,
  ResetPasswordConfirm,
  VerifyEmail,
} from "./pages/_";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer theme="colored" hideProgressBar="true" />
      <BrowserRouter>
        <Routes>
          <Route path="register/" element={<Register />} />
          <Route path="verify-email/" element={<VerifyEmail />} />
          <Route path="login/" element={<Login />} />
          <Route path="reset-password/" element={<ResetPassword />} />
          <Route
            path="reset-password-confirm/:uidb64/:token"
            element={<ResetPasswordConfirm />}
          />

          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
