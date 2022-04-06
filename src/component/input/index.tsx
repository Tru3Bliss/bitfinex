import React from "react";

const Input = (props: any) => {
  const {
    label,
    className = "",
    value,
    setValue,
    type = "text",
    error = false,
  } = props;
  return (
    <div className="flex flex-col gap-2">
      <label className="text-app-blue font-light">{label}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className="bg-app-primary-200 outline-none px-2 h-10 focus:border-app-blue focus:border"
      />
      {error && (
        <p className="text-xs text-app-red font-light">
          This field is required
        </p>
      )}
    </div>
  );
};

export default Input;
