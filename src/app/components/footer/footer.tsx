import Link from "next/link";
import React from "react";
import { FooterLogoIcon } from "../icons/footerLogo";

const Footer = () => {
  const footerData = {
    footerLinks: [
      {
        heading: "PRODUCTS",
        links: [
          {
            label: "Cloud Mediqm",
            href: "/software/cloud-mediqm",
          },
          {
            label: "Mediqm Mobility",
            href: "/software/mediqm-mobility",
          },
          {
            label: "Mediqm Platform",
            href: "/software/mediqm-platform",
          },
          {
            label: "Mediqm Solution",
            href: "/software/mediqm-solution",
          },
        ],
      },
      {
        heading: "SERVICE",
        links: [
          {
            label: "Hospital Quality Consulting",
            href: "/service/hospital-quality",
          },
          {
            label: "Quality Management Education & Training",
            href: "/service/quality-management",
          },
          {
            label: "Hospital Safety Consulting",
            href: "/service/hospital-safety",
          },
        ],
      },
    ],
    address: {
      heading: "ADDRESS",
      logo: "/images/logo.svg",
      email: "info@Mediqlogix.com",
      address: "  15, Downing Town, Pa 12345 USA",
      phone: "Phone : +1 123 456 7891",
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
          href: "/service",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
      copyrightText: "Privacy © 2024 - Mediqlogix.com",
    },
  };

  return (
    <>
      <div className=" relative z-50 bg-primary-black px-5 xl:px-36 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4">
          <div className=" lg:col-span-3 lg:w-9/12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
              {footerData.footerLinks.map((links, index) => {
                return (
                  <div key={index}>
                    <h3 className="mb-7 text-sm text-white ">
                      {links.heading}
                    </h3>
                    <ul className="flex flex-col gap-3 text-xs">
                      {links.links.map((link, index) => {
                        return (
                          <Link
                            className={`text-white w-max border-[#707070] ${
                              index != 3
                                ? " border-b border-[#707070]  pb-1"
                                : ""
                            } `}
                            key={index}
                            href={link.href}
                          >
                            {" "}
                            <div>
                              <li className=" w-auto">{link.label}</li>
                            </div>
                          </Link>
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
            <div className="text-white flex flex-col gap-3 text-xs">
              <Link href={"/"}>
                <FooterLogoIcon />
              </Link>
              <p className="border-b border-[#707070]  p-1">
                {footerData.address.address}
              </p>
              <p className="border-b border-[#707070]  p-1">
                <a href={`tel:${footerData.address.phone} `}>
                  {footerData.address.phone}
                </a>
              </p>
              <p className="border-b border-[#707070]  p-1">
                Email :
                <a href={`mailto:${footerData.address.email}`}>
                  {" "}
                  {footerData.address.email}
                </a>
              </p>
              {/* <p className="ps-1">Website : {footerData.address.website}</p> */}
            </div>
            <div className="flex mt-10 gap-2">
              <a target="_blank" href="https://www.facebook.com/">
                <img src="/images/Facebook.svg"></img>
              </a>
              <a target="_blank" href="https://www.linkedin.com/">
                <img src="/images/Linkdine.svg"></img>
              </a>
              <a target="_blank" href="https://www.youtube.com">
                <img src="/images/Youtube.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-green py-2 px-2 xl:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-4 gap-2 xl:gap-0 ">
          <div className="xl:col-span-1 flex-wrap justify-center sm:justify-center items-center flex gap-7">
            {footerData.copyRight.copyrightLinks.map((link, index) => {
              return (
                <Link
                  className={`font-semibold   text-xs text-white ${
                    index != 2 ? "border-e-2 pe-7 " : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="xl:col-span-2 text-center sm:text-start  text-white text-xs sm:flex sm:justify-center  xl:justify-center">
            {footerData.copyRight.copyrightText}
          </div>
          <div className="xl:col-span-1 text-center sm:text-start  text-white text-xs sm:flex sm:justify-center xl:justif-end">
            Created by{" "}
            <a
              target="blank"
              className="underline ps-2"
              href="https://www.setoo.co/"
            >
              Setoo Solutions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
