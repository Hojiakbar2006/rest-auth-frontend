import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isLogedIn = localStorage.getItem("isLogedIn" || true);
  return isLogedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
