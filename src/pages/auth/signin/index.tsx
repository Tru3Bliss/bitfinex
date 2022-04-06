import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionButton from "../../../component/button/action";
import Input from "../../../component/input";
import Layout from "../../../layout/layout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const handleLogin = () => {
    setError({
      email: email.length === 0,
      password: password.length === 0,
    });
    if (email.length !== 0 && password.length !== 0) {
      //do login
    }
  };

  return (
    <Layout title="Bitfinex">
      <div className="px-7.5 pt-5 pb-37 mx-auto text-white">
        <div className="mt-5 mb-10 flex justify-center">
          <Link
            to={"/"}
            className="ml-1 mt-1.5"
            style={{ paddingBottom: "6.76px" }}
          >
            <img src="/assets/image/logo.svg" alt="logo" className="w-44" />
          </Link>
        </div>
        <div className="bg-app-primary-light w-525 py-7.5 px-12.5 shadow-50">
          <h1 className="text-center text-2xl mt-2.5">Login</h1>
          <div className="text-center font-light text-14.5 mt-7.5 mb-6 leading-6">
            <span className="font-medium">Important!</span>
            <br />
            Please check that you are visiting{" "}
            <FontAwesomeIcon icon={faLock} size="sm" className="pr-1" />
            https://www.bitfinex.com
            <br />
          </div>
          <form className="flex flex-col gap-6">
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              label="Username or Email"
              error={error.email}
            />
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              label="Password"
              error={error.password}
            />
            <div className="mt-6 font-light">
              <Link to="/passwordreset">
                <p className="text-app-green">Forgot Password?</p>
              </Link>
              <div className="flex justify-end">
                <ActionButton action={handleLogin}>Login</ActionButton>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-3 gap-1">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"} className="text-app-green">
            Sign Up
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
