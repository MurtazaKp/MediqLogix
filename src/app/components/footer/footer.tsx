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
            label: "Mediqm Solution",
            href: "/software",
          },
          {
            label: "Saas Mediqm",
            href: "/software",
          },
          {
            label: "Mediqm Platform",
            href: "/software",
          },
        ],
      },
      {
        heading: "SERVICE",
        links: [
          {
            label: "Hospital Quality Consulting",
            href: "/service",
          },
          {
            label: "Quality Management Education & Training",
            href: "/service",
          },
          {
            label: "Hospital Safety Consulting",
            href: "/service",
          },
        ],
      },
    ],
    address: {
      heading: "ADDRESS",
      logo: "/images/logo.svg",
      email: "info@Mediqlogix.com",
      address: "  15, Downing Town, PA 12345",
      phone: "USA Phone : +1 123 456 7891",
      website: "http://www.mediqlogix.com",
    },
    copyRight: {
      copyrightLinks: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Solution",
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
      copyrightText: "Privacy © 2024 - mediqlogix.com",
    },
  };

  return (
    <>
      <div className=" bg-primary-black px-5 lg:px-36 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-4">
          <div className=" lg:col-span-3 lg:w-9/12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 ">
              {footerData.footerLinks.map((links, index) => {
                return (
                  <div key={index}>
                    <h3 className="mb-7 text-white ">{links.heading}</h3>
                    <ul className="flex flex-col gap-3 text-xs">
                      {links.links.map((link, index) => {
                        return (
                          <Link
                            className={"text-white "}
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
              <FooterLogoIcon />
              <p>{footerData.address.address}</p>
              <p>phone:{footerData.address.phone}</p>
              <p>Email:{footerData.address.email}</p>
              <p>Website:{footerData.address.website}</p>
            </div>
            <div className="flex mt-10 gap-2">
              <a>
                <img src="/images/Facebook.svg"></img>
              </a>
              <a>
                <img src="/images/Linkdine.svg"></img>
              </a>
              <a>
                <img src="/images/Youtube.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-green py-2 px-2 lg:px-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          <div className="lg:col-span-3 flex-wrap flex gap-5 lg:gap-16">
            {footerData.copyRight.copyrightLinks.map((link, index) => {
              return (
                <Link className="font-semibold" key={index} href={link.href}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="lg:col-span-1 sm:flex sm:justify-end lg:justify-start">
            {footerData.copyRight.copyrightText}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
