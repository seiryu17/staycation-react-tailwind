import React from "react";

function IconMenu(props) {
  return (
    <div className="flex flex-col mr-3 sm:mr-5">
      <div className="mb-5">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="flex">
        <div className="text-colorPrimary mr-2">{props.amount}</div>
        <div className="text-colorText">{props.title}</div>
      </div>
    </div>
  );
}

export default IconMenu;
