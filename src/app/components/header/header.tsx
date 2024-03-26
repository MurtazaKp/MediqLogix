"use client";
import React, { useState } from "react";
import Modal from "./modal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const NavigationData = {
    heading: "Navigation",
    navLinks: [
      {
        label: "About Us",
        href: "/about",
        sublink: [
          {
            label: "Company Profile",
            href: "about/company-profile",
          },

          {
            label: "Vission and Mission",
            href: "about/vision-mission",
          },
          {
            label: "Corporate Governance",
            href: "about/corporate-governance",
          },
        ],
      },
      {
        label: "Software Products",
        href: "/software",
        sublink: [
          {
            label: "Company Profile",
            href: "about/company-profile",
          },

          {
            label: "Vission and Mission",
            href: "about/vision-mission",
          },
          {
            label: "Corporate Governance",
            href: "about/corporate-governance",
          },
        ],
      },
      {
        label: "Service",
        href: "/service",
        sublink: [
          {
            label: "Company Profile",
            href: "about/company-profile",
          },

          {
            label: "Vission and Mission",
            href: "about/vision-mission",
          },
          {
            label: "Corporate Governance",
            href: "about/corporate-governance",
          },
        ],
      },
      {
        label: "My MediQM",
        href: "/mediQM/partners",
        sublink: [
          {
            label: "Company Profile",
            href: "about/company-profile",
          },

          {
            label: "Vission and Mission",
            href: "about/vision-mission",
          },
          {
            label: "Corporate Governance",
            href: "about/corporate-governance",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="sticky top-0 bg-white z-50">
        <div className="flex justify-between  px-2 lg:px-[139px] py-4">
          <Link className="flex items-center " href={"/"}>
            <img className=" " src="/images/logo.svg" />
          </Link>
          <div className=" flex gap-6 items-center">
            <div className="hidden xl:flex gap-6 ">
              {NavigationData.navLinks.map((link, index) => {
                return (
                  <div className="relative group -ml-px" key={index}>
                    <Link
                      className={`${
                        pathname.includes(link.href) ? "text-primary-green" : ""
                      } hover:text-primary-green`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                    {link.sublink && (
                      <div className="bg-primary-green rounded-b-lg  hidden group-hover:flex duration-500 transition-all text-white py-3 flex-col gap-3 w-max   top-12 absolute z-20">
                        {link.sublink.map((navLinks, index) => {
                          return (
                            <div
                              className={`px-5 py-1 hover:underline hover:underline-offset-2 ${
                                index !== link.sublink.length - 1 ? "" : ""
                              }`}
                              key={index}
                            >
                              <Link className="text-sm" href={navLinks.href}>
                                {navLinks.label}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <Link
              href={"/mediQM/contact"}
              className="border text-sm HelveticaNeue-Regular py-2  hover:bg-black hover:text-white border-black rounded-full flex justify-center items-center px-2 "
            >
              Get in touch
            </Link>
            <button onClick={handleOpen} className="block xl:hidden">
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
