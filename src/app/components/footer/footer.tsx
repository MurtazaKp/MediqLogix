import Link from "next/link";
import React from "react";
import { FooterLogoIcon } from "../icons/footerLogo";
import { LogoIcon } from "../icons/logo";

const Footer = () => {
  const footerData = {
    footerLinks: [
      {
        heading: "PRODUCTS",
        links: [
          {
            label: "Cloud MediQm",
            href: "/software/cloud-mediqm",
          },
          {
            label: "MediQM Mobility",
            href: "/software/mediqm-mobility",
          },
          {
            label: "MediQM Platform",
            href: "/software/mediqm-platform",
          },
          {
            label: "MediQM Solution",
            href: "/software/mediqm-solution",
          },
        ],
      },
      {
        heading: "SERVICES",
        links: [
          {
            label: "Hospital Quality Consulting",
            href: "/services/hospital-quality",
          },
          {
            label: "Quality Management Education & Training",
            href: "/services/quality-management",
          },
          {
            label: "Hospital Safety Consulting",
            href: "/services/hospital-safety",
          },
        ],
      },
    ],
    address: {
      heading: "ADDRESS",
      logo: "/images/logo.svg",
      email: "info@Mediqlogix.com",
      address: "1st Floor,Plot #11,Shilpi Valley,Madhapur Hyderabad India",
      phone: "Phone : +91 8008552566",
      website: "http://www.mediqlogix.com",
    },
    copyRight: {
      copyrightLinks: [
        {
          label: "Home",
          href: "/",
        },

        {
          label: "Services",
          href: "/services",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
      copyrightText: "Privacy © 2024 - MediQlogix.com",
    },
  };

  return (
    <>
      <div className=" relative bg-primary-black px-10 xl:px-36 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-0 xl:gap-10 lg:grid-cols-4">
          <div className=" lg:col-span-3 lg:w-9/12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
              {footerData.footerLinks.map((links, index) => {
                return (
                  <div key={index}>
                    <h3 className="mb-7 text-base text-white ">
                      {links.heading}
                    </h3>
                    <ul className="flex flex-col gap-3 text-sm">
                      {links.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link
                              className={`text-white flex flex-wrap lg:flex-nowrap   ${
                                index !== links.links.length - 1
                                  ? "border-b sm:border-0 sm:underline sm:underline-offset-[14px] lg:w-max decoration-[#707070]    pb-1"
                                  : ""
                              } `}
                              href={link.href}
                            >
                              {" "}
                              <ul>
                                <li className=" w-auto">{link.label}</li>
                              </ul>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-1">
            <h5 className="mb-5 text-white">{footerData.address.heading}</h5>
            <div className="text-white flex flex-col gap-3 text-sm">
              <Link href={"/"} aria-label="Footer Logo">
                <LogoIcon className="w-6/12 " />
              </Link>
              <p className="border-b border-[#707070]  p-1">
                {footerData.address.address}
              </p>
              <p className="border-b border-[#707070]  p-1">
                <Link href={`tel:${footerData.address.phone} `}>
                  {footerData.address.phone}
                </Link>
              </p>
              <p className="border-b border-[#707070]  p-1">
                Email :
                <Link href={`mailto:${footerData.address.email}`}>
                  {" "}
                  {footerData.address.email}
                </Link>
              </p>
              {/* <p className="ps-1">Website : {footerData.address.website}</p> */}
            </div>
            {/* <div className="flex mt-10 gap-2">
              <Link target="_blank" href="https://www.facebook.com/">
                <img src="/images/Facebook.svg"></img>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/">
                <img src="/images/Linkdine.svg"></img>
              </Link>
              <Link target="_blank" href="https://www.youtube.com">
                <img src="/images/Youtube.svg"></img>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-primary-green py-2 px-10 xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-2 xl:gap-0 ">
          <div className="lg:col-span-2 flex-wrap justify-center sm:justify-center lg:justify-start items-center flex gap-4 sm:gap-7">
            {footerData.copyRight.copyrightLinks.map((link, index) => {
              return (
                <Link
                  className={`font-semibold  text-xs text-white ${
                    index != 2 ? "border-e-2 pe-4 sm:pe-7  " : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:col-span-2 text-center sm:text-start  text-white text-xs sm:flex sm:justify-center  xl:justify-center">
            {footerData.copyRight.copyrightText}
          </div>
          <div className="lg:col-span-2 text-center sm:text-start  text-white text-xs sm:flex sm:justify-center lg:justify-end">
            Created by{" "}
            <Link
              target="blank"
              className="underline ps-2"
              href="https://www.setoo.co/"
              rel="nofollow"
            >
              Setoo Solutions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
