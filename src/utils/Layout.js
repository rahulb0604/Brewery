import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function Layout() {
  const user = localStorage.getItem("userId");
  const location = useLocation();
  console.log(user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
