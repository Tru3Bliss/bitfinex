import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import LoginPage from "./auth/signin";
import ErrorPage from "./404";
import SingUpPage from "./auth/signup";
import VerifyPage from "./auth/verify";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SingUpPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="*" element={<ErrorPage error={404} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);
