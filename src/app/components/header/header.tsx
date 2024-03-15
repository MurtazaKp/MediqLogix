"use client";
import React, { useState } from "react";
import Modal from "./modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="">
        <div className="flex justify-between py-2 px-2 lg:px-36">
          <img src="/images/logo.svg" />
          <div className=" flex gap-6">
            <p className="border border-black rounded-full flex justify-center items-center px-2">
              Get in Touch
            </p>
            <button onClick={handleOpen} className="">
              <img src="/images/Menu.svg" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && <Modal handleClose={handleClose} />}
    </>
  );
};

export default Header;