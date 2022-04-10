import React from "react";

const ActionButton = (props) => {
  const { type, children, className, action } = props;
  return (
    <button
      type={type ? type : "button"}
      className="px-7.3 border-app-green-100 rounded-sm border-2 text-app-green-100 leading-9 font-medium "
      onClick={action}
    >
      {children}
    </button>
  );
};

export default ActionButton;
