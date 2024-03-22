import React from "react";
import { FooterLogoIcon } from "../../icons/footerLogo";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center h-full w-full">
      <div className="bg-primary-green lg:rounded-s-xl  lg:w-3/12 text-white flex flex-col items-center py-11 justify-between">
        <div className=" text-[18.5px] font-bold">
          {" "}
          <p>Get In Touch</p>
          <p>With Us!</p>
        </div>
        <div>
          <img src="/images/Email.svg"></img>
        </div>
        <div>
          <FooterLogoIcon />
        </div>
      </div>
      <div className="bg-white rounded-e-xl lg:w-9/12 pt-9 h-full  sm:px-8 pb-11 ">
        {/* <h3 className="text-[18.5px]  font-bold mb-6 text-primary-green">
          Contact
        </h3> */}
        {/* <div className="flex gap-5 items-end flex-col">
          <input
            className="  h-10 w-full rounded-lg placeholder:text-black focus:outline-primary-green px-5 border"
            placeholder="Name"
            type="text"
          />
          <input
            className="  h-10 w-full rounded-lg placeholder:text-black focus:outline-primary-green  px-5 border"
            placeholder="Subject"
            type="text"
          />
          <input
            className="  h-10 w-full rounded-lg placeholder:text-black focus:outline-primary-green  px-5 border"
            placeholder="Email"
            type="text"
          />

          <textarea
            placeholder="Message"
            className=" resize-none  w-full rounded-lg mb-8  h-32 pt-2 placeholder:text-black focus:outline-primary-green  px-5 border"
          />
          <button className="border border-black text-black  hover:bg-black px-10 py-3 rounded-full hover:text-white">
            Submit
          </button>
        </div> */}
        <div className="relative -mb-40 sm:mb-0">
          <iframe
            className="w-full relativez-40 h-[500px]   "
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZ2LWscolnH9GZPY9A8-dBsBbYsYEpCjuDRpa-9boqwLxXPw/viewform?embedded=true"
          ></iframe>
          <div className="bg-white h-[100px] w-full bottom-4 sm:hidden absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
