import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { withCookies } from "react-cookie";
import HomePage from "./home";
import LoginPage from "./auth/signin";

const Pages = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up/" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withCookies(Pages);