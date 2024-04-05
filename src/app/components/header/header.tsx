"use client";
import React, { useState } from "react";
import Modal from "./modal";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FooterLogoIcon } from "../icons/footerLogo";
import { DownArrowIcon } from "../icons/Down";
import { LogoIcon } from "../icons/logo";

const Header = ({ navLinks }: any) => {
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
        href: "/services",
        sublink: [
          {
            label: "Hospital Quality",
            href: "/services/hospital-quality",
          },

          {
            label: "Hospital Safety",
            href: "/services/hospital-safety",
          },
          {
            label: "Quality Management",
            href: "/services/quality-management",
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
          {
            label: "Careers",
            href: "/careers",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="sticky py-4 xl:py-0 top-0 bg-black text-white z-30">
        <div className="flex justify-between  px-2 sm:px-10 xl:px-[139px] ">
          <Link
            className="flex items-center w-5/12 sm:w-auto "
            href={"/"}
            aria-label="Main Logo"
          >
            <LogoIcon />
          </Link>
          <div className=" flex justify-end w-7/12 sm:w-full gap-6 items-center">
            <div className="hidden lg:flex lg:gap-3 xl:gap-5 ">
              {navLinks.map((link: any, index: number) => {
                return (
                  <div
                    className="relative lg:py-5 text-sm cursor-pointer group "
                    key={index}
                  >
                    <div className="flex gap-2 items-center">
                      <Link
                        className={`text-xs lg:text-sm xl:text-base font-medium ${
                          pathname.includes(link.href)
                            ? "text-white font-bold"
                            : "text-[#c6c6c6]"
                        } hover:text-white  `}
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                      {link.sublink && <DownArrowIcon />}
                    </div>
                    {link.sublink && (
                      <div className="bg-[white] rounded-b-lg  hidden group-hover:flex duration-500 transition-all text-[#3c3c3c] py-3 flex-col gap-2 w-[200px]   lg:top-[77px] xl:top-[64px] absolute z-[999]">
                        {link.sublink.map((navLinks: any, index: number) => {
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
              <Image
                src="/images/Menu.svg"
                alt="Hamburger Menu"
                width={42}
                height={42}
              />
            </button>
          </div>
        </div>
      </div>
      {isOpen && <Modal handleClose={handleClose} />}
    </>
  );
};

export default Header;
