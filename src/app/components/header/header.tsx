import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between py-2 px-36">
        <img src="/images/logo.svg" />
        <div className=" flex gap-6">
          <p className="border border-black rounded-full flex justify-center items-center px-2">
            Get in Touch
          </p>
          <button>
            <img src="/images/Menu.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
