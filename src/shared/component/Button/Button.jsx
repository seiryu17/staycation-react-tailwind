import React from "react";
import "./Button.css";

const Button = (props) => {
  let disabled = "";
  if (props.isLink) {
    return (
      <a className={props.className} href={props.link}>
        {props.children}
      </a>
    );
  }
  if (props.disabled) {
    disabled = "disabled";
  }
  return (
    <button
      disabled={disabled}
      className="bg-blue-700 hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-300 focus:outline-none ripple-bg-blue-500 text-colorTextWhite text-lg px-10 py-3 rounded shadow-xl font-medium"
    >
      {props.children}
    </button>
  );
};

export default Button;
