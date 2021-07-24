import React from "react";

const Footer = (props) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-20">
      <div className="flex flex-col flex-wrap w-full md:w-4/12 gap-3">
        <div className="text-2xl font-medium flex">
          <div className="text-colorSecondary">Stay</div>
          <div className="text-colorPrimary">cation.</div>
        </div>
        <div className="text-sm text-colorText">
          We kaboom your beauty holiday instantly and memorable.
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-3">
        <div className="flex flex-col flex-wrap w-full md:w-4/12 gap-5">
          <div className="font-medium flex">
            <div className="text-colorPrimary">For Beginners</div>
          </div>
          <div className="flex flex-col text-sm text-colorText">
            <a href="/#">New Account</a>
            <a href="/#">Start Booking a Room</a>
            <a href="/#">Use Payments</a>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full md:w-4/12 gap-5">
          <div className="font-medium flex">
            <div className="text-colorPrimary">Explore Us</div>
          </div>
          <div className="flex flex-col text-sm text-colorText">
            <a href="/#">Our Careers</a>
            <a href="/#">Privacy</a>
            <a href="/#">Terms & Conditions</a>
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full md:w-4/12 gap-5">
          <div className="font-medium flex">
            <div className="text-colorPrimary">Connect Us</div>
          </div>
          <div className="flex flex-col text-sm text-colorText">
            support@staycation.id<br></br>021 - 2208 - 1996<br></br>Staycation,
            Kemang, Jakarta
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
