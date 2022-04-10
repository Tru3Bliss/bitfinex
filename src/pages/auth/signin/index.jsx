import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactModal from "react-modal-resizable-draggable";
import ActionButton from "../../../component/button/action";
import Input from "../../../component/input";
import Layout from "../../../layout/layout";
import Notification from "../../../component/notification";
import { BarLoader } from "react-spinners";
import LoadingButton from "../../../component/button/loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openModal, setOpenModal] = useState("");
  const [isFirst, setIsFirst] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [notif, setNotif] = useState({
    open: false,
    message: "",
  });
  const navigate = useNavigate()

  const handleLogin = () => {
    setError({
      email: email.length === 0,
      password: password.length === 0,
    });
    if (email.length !== 0 && password.length !== 0) {
      setLoading(true);
      //do login

      setTimeout(() => {
        if (email !== "test@test.com" && password !== "1234")
          
          setNotif({
            open: true,
            message: `Invalid ${email!=='test@tes.com'?"email address":"password"}. Please try again.`
            // message: isFirst
            //   ? "Invalid request token. Please try again."
            //   : "Invalid login or password",
          });
        // setIsFirst(false);
        else{
          navigate("/verify")
        }
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <Layout title="Bitfinex">
      <BarLoader loading={loading} color="#82BAF6" width={"100%"} />
      <div className="tablet:px-7.5 py-15 tablet:pt-5 tablet:pb-37 mx-auto text-white">
        <div className="tablet:mt-5 mb-10 flex justify-center">
          <Link
            to={"/"}
            className="ml-1 mt-1.5"
            style={{ paddingBottom: "6.76px" }}
          >
            <img src="/assets/image/logo.svg" alt="logo" className="w-44" />
          </Link>
        </div>
        <Notification
          open={notif.open}
          close={() => {
            setTimeout(() => {
              setIsFirst(false);
            }, 1000);
            setNotif({
              open: false,
            });
          }}
          type={isFirst ? 1 : 2}
        >
          {notif.message}
        </Notification>
        <div className="bg-app-primary-light w-full tablet:w-525 tablet:py-7.5 tablet:px-12.5 py-2.5 px-5 shadow-50">
          <h1 className="text-center text-2xl mt-2.5">Login</h1>
          <div className="text-center font-light text-sm tablet:text-14.5 mt-7.5 mb-6 leading-5 tablet:leading-6">
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
              <div className="flex">
                <Link to="/passwordreset" className="flex">
                  <p className="text-app-green w-max">Forgot Password?</p>
                </Link>
              </div>
              <div className="flex justify-end">
                {loading ? (
                  <LoadingButton />
                ) : (
                  <ActionButton action={handleLogin}>Login</ActionButton>
                )}
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
        <ReactModal
          initWidth={800}
          initHeight={400}
          onFocus={() => console.log("Modal is clicked")}
          className={"my-modal-custom-class"}
          onRequestClose={() => setOpenModal(false)}
          isOpen={openModal}
        >
          <h3>My Modal</h3>
          <div className="body">
            <p>This is the modal&apos;s body.</p>
          </div>
          <button onClick={() => setOpenModal(false)}>Close modal</button>
        </ReactModal>
      </div>
    </Layout>
  );
};

export default LoginPage;
