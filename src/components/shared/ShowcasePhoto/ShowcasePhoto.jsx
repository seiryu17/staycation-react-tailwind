import React from "react";

const ShowcasePhoto = (props) => {
  if (props.form1) {
    return (
      <div className="relative">
        <img
          className="sm:w-80 md:w-60 lg:w-80 sm:max-w-none rounded-xl"
          src={props.photo}
          alt="1"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black min-w-full min-h-1/4 rounded-br-xl rounded-bl-xl">
          &nbsp;
        </div>
        <div className="flex absolute top-0 right-0 text-colorTextWhite bg-colorPrimary rounded-tr-xl rounded-bl-xl px-8 py-2 text-xs ">
          ${props.price}
          <div className="font-extralight ml-1">per night</div>
        </div>
        <div className="absolute bottom-0 left-0 ml-5 mb-3 text-colorTextWhite">
          {props.name}
          <div className="font-extralight text-xs">{props.origin}</div>
        </div>
      </div>
    );
  }
  if (props.form2) {
    return (
      <div className="relative sm:h-48 md:h-36 lg:h-48">
        <img
          className="sm:w-80 sm:h-48 md:h-36 lg:h-48 object-cover rounded-xl"
          src={props.photo}
          alt="1"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black min-w-full min-h-1/4 rounded-br-xl rounded-bl-xl">
          &nbsp;
        </div>
        <div className="flex absolute top-0 right-0 text-colorTextWhite bg-colorPrimary rounded-tr-xl rounded-bl-xl px-8 py-2 text-xs ">
          ${props.price}
          <div className="font-extralight ml-1">per night</div>
        </div>
        <div className="absolute bottom-0 left-0 ml-5 mb-3 text-colorTextWhite">
          {props.name}
          <div className="font-extralight text-xs">{props.origin}</div>
        </div>
      </div>
    );
  }
  if (props.form3) {
    let isPopular = false;
    if (props.isPopular) {
      isPopular = (
        <div className="flex absolute top-0 right-0 text-colorTextWhite bg-colorPrimary rounded-tr-xl rounded-bl-xl px-5 py-2 text-xs ">
          Popular
          <div className="font-extralight ml-1">Choice</div>
        </div>
      );
    }
    return (
      <div className="relative sm:h-full xl:w-60 ">
        <img
          className="sm:w-52 sm:h-full xl:w-60 object-cover rounded-xl"
          src={props.photo}
          alt="1"
        />
        {isPopular}
        <div className="text-colorPrimary">{props.name}</div>
        <div className="text-colorText text-xs">{props.origin}</div>
      </div>
    );
  }
};

export default ShowcasePhoto;
