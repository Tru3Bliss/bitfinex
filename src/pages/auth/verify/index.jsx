import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import ReactModal from "react-modal-resizable-draggable";
import Input from "../../../component/input";
import Notification from "../../../component/notification";
import Layout from "../../../layout/layout";
import FlexibleModal from "react-modal-resizable-draggable";
import useWindowDimensions from "../../../component/utils/dimension";

const VerifyPage = () => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [notif, setNotif] = useState({
    open: false,
    message: "",
  });

  const { height, width } = useWindowDimensions();
  
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
            setNotif({
              open: false,
            });
          }}
          type={2}
        >
          {notif.message}
        </Notification>
        <div className="bg-app-primary-light w-full tablet:w-525 tablet:py-7.5 tablet:px-12.5 py-2.5 px-5 shadow-50">
          <p className="text-center text-3xl">
            Please check your email to complete login
          </p>
          <p className="text-center mt-6 text-lg mb-12">
            An email has been sent to the email address linked to your Bitfinex
            account. To login to your account please use the link include in the
            confirmation email or copy the code and paste it below
          </p>
          <Input value={code} setValue={setCode} label="Email Code" />
          <button
            className="bg-app-green hover:bg-app-green-100 hover:scale-105 active:scale-100 py-3 mt-4 w-full duration-100"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Submit
          </button>
        </div>
        <div className="App text-black">
          <FlexibleModal
            initWidth={width<800?width:800}
            onFocus={() => console.log("Modal is clicked")}
            className={"my-modal-custom-class"}
            onRequestClose={() => setOpenModal(false)}
            isOpen={openModal}
            disableResize
          >
            <div className="items-center bg-app-primary-light h-full w-full flex release">
              <div className={`absolute left-10 top-1/3 transform -translate-y-1/2 ${width<500 && 'hidden'}`}>
                <img
                  src="/assets/image/ico_ga.png"
                  alt="google auth"
                  className="w-28"
                />
              </div>
              <div className={`mx-auto w-3/4 sm:w-1/2 text-white`}>
                <h2 className="text-3xl">Two-Factor Authentication</h2>
                <p className="mt-4 text">
                  Please enter your Google Authenticator 2FA token.
                </p>
                <div className="mt-6">
                  <Input label="2FA Token" />
                </div>
                <button className="border-app-green text-app-green border-2 hover:border-app-green-100 hover:scale-105 active:scale-100 py-3 mt-8 w-full duration-100" onClick={()=>setOpenModal(false)}>
                  Authenticate
                </button>
                <Link to={"/"}>
                  <p className="text-app-blue font-light text-left mt-4">Lost your Google AUthenticator</p>
                </Link>
              </div>
            </div>
          </FlexibleModal>
        </div>
      </div>
    </Layout>
  );
};

export default VerifyPage;
