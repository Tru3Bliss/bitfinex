import {
  faBullhorn,
  faInfo,
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Notification = (props) => {
  const { children, open, close, type = 1 } = props;
  const [openNotif, setOpenNotif] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  useEffect(() => {
    if (open) {
      setShowNotif(open);
      setTimeout(() => {
        setOpenNotif(open);
      }, 100);
    } else {
      setOpenNotif(open);
      setTimeout(() => {
        setShowNotif(open);
      }, 150);
    }
  }, [open]);

  return (
    <div
      className={`transform  ${
        open ? "scale-y-100 py-2" : "scale-y-0 h-0"
      }  duration-300 w-full`}
    >
      <div
        className={`${
          type === 1
            ? "border-app-yellow-800 bg-app-yellow-900"
            : "border-app-blue bg-app-blue-light"
        } border flex justify-between items-center px-2`}
      >
        <div className="flex justify-center gap-2 items-center w-full text-app-gray-100">
          <FontAwesomeIcon icon={type === 1 ? faInfoCircle : faBullhorn} />
          {children}
        </div>
        <button onClick={close} className="items-center flex font-bold">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
