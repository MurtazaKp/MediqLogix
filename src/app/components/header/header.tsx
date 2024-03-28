"use client";
import React, { useState } from "react";
import Modal from "./modal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FooterLogoIcon } from "../icons/footerLogo";
import { DownArrowIcon } from "../icons/Down";
import { LogoIcon } from "../icons/logo";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
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
            href: "/company-profile",
          },

          {
            label: "Vision and Mission",
            href: "/vision-mission",
          },
          {
            label: "Our Team",
            href: "/our-team",
          },
          {
            label: "Corporate Governance",
            href: "/corporate-governance",
          },
        ],
      },
      {
        label: "Software Products",
        href: "/software",
        sublink: [
          {
            label: "Cloud MediQM",
            href: "/software/cloud-mediqm",
          },

          {
            label: "MediQM Mobility",
            href: "/software/mediqm-mobility",
          },
          {
            label: "MediQM platform",
            href: "/software/mediqm-platform",
          },
          {
            label: "MediQM Solution",
            href: "/software/mediqm-solution",
          },
        ],
      },
      {
        label: "Services",
        href: "/service",
        sublink: [
          {
            label: "Hospital Quality",
            href: "/service/hospital-quality",
          },

          {
            label: "Hospital Safety",
            href: "/service/hospital-safety",
          },
          {
            label: "Quality Management",
            href: "/service/quality-management",
          },
        ],
      },
      {
        label: "Data Analytics",
        href: "/data-analytics",
      },
      {
        label: "My MediQM",
        href: "/partners",
        sublink: [
          {
            label: "Contact",
            href: "/contact",
          },

          {
            label: "Partners",
            href: "/partners",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="sticky py-4 xl:py-0 top-0 bg-black text-white z-30">
        <div className="flex justify-between  px-2 sm:px-10 xl:px-[139px] ">
          <Link className="flex items-center w-5/12 sm:w-auto " href={"/"}>
            <LogoIcon />
          </Link>
          <div className=" flex justify-end w-7/12 sm:w-full gap-6 items-center">
            <div className="hidden lg:flex lg:gap-4 xl:gap-6 ">
              {NavigationData.navLinks.map((link, index) => {
                return (
                  <div
                    className="relative lg:py-5 text-sm cursor-pointer group -ml-px"
                    key={index}
                  >
                    <div className="flex gap-2 items-center">
                      <Link
                        className={`text-xs lg:text-sm ${
                          pathname.includes(link.href)
                            ? "text-white font-bold"
                            : "text-[#c6c6c6]"
                        } hover:text-white  hover:font-bold`}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                      {link.sublink && <DownArrowIcon />}
                    </div>
                    {link.sublink && (
                      <div className="bg-[white] rounded-b-lg  hidden group-hover:flex duration-500 transition-all text-[#3c3c3c] py-3 flex-col gap-2 w-[200px]   lg:top-[77px] xl:top-[60px] absolute z-[999]">
                        {link.sublink.map((navLinks, index) => {
                          return (
                            <div
                              className={`px-5 py-1 hover:underline hover:underline-offset-2 ${
                                index !== link.sublink.length - 1 ? "" : ""
                              }`}
                              key={index}
                            >
                              <Link
                                className="lg:text-xs xl:text-sm"
                                href={navLinks.href}
                              >
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
              href={"/contact"}
              className="border text-base HelveticaNeue-Regular py-2 text-[#c6c6c6]  hover:bg-white hover:text-black border-white rounded-full flex justify-center items-center px-2 "
            >
              Get in touch
            </Link>
            <button onClick={handleOpen} className="block lg:hidden">
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
