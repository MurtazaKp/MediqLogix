"use client";
import React, { useState } from "react";
import { FooterLogoIcon } from "../icons/footerLogo";
import { CareerIcon } from "../icons/career";
import FormfacadeEmbed from "@formfacade/embed-react";

const Careers = ({ heading, formSrc }: any) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <div className="flex flex-col lg:flex-row lg:w-10/12 xl:w-full mx-auto items-stretch  justify-center  w-full">
      <div className="bg-primary-green lg:rounded-s-xl  lg:w-3/12 text-white flex flex-col items-center py-11 justify-between">
        <div className=" text-[18.5px] font-bold">
          {" "}
          <p className="w-10/12 mx-auto">{heading}</p>
        </div>
        <div>
          <CareerIcon />
        </div>
        <div>
          <FooterLogoIcon />
        </div>
      </div>
      <div className="bg-white h-[500px] rounded-e-xl lg:w-9/12  overflow-y-auto  sm:px-8 pb-11 ">
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
          {/* <iframe
            className="w-full relativez-40 h-[500px]   "
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZ2LWscolnH9GZPY9A8-dBsBbYsYEpCjuDRpa-9boqwLxXPw/viewform?embedded=true"
          ></iframe> */}
          {/* {loading ? (
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/109911649385799279646/form/1FAIpQLScyzrB9sIKdovMJ5hebI3JZGKpLLAydy7db62rT_T6laHPcrQ/classic.js/?div=ff-compose"
              onSubmitForm={() => console.log("Form submitted")}
            />
          ) : (
            <div className="loader"></div>
          )} */}
          <div>
            {loading && (
              <div className="absolute z-20 flex-col bg-white justify-center flex w-full items-center h-[600px] ">
                <div className="loader block"></div>
                <p>Loading</p>
              </div>
            )}
            <FormfacadeEmbed
              formFacadeURL={formSrc && formSrc}
              onSubmitForm={() => console.log("Form submitted")}
            />
          </div>

          <div className="bg-white h-[100px] w-full bottom-4 sm:hidden absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
