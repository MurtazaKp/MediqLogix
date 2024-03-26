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
      },
      {
        label: "Software Products",
        href: "/software",
      },
      {
        label: "Service",
        href: "/service",
      },
      {
        label: "My MediQM",
        href: "/mediQM/partners",
      },
    ],
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between  px-2 lg:px-[139px] py-4">
          <Link className="flex items-center " href={"/"}>
            <img className=" " src="/images/logo.svg" />
          </Link>
          <div className=" flex gap-6 items-center">
            <div className="hidden xl:flex gap-6 ">
              {NavigationData.navLinks.map((link, index) => {
                return (
                  <Link
                    className={`${
                      pathname.includes(link.href) ? "text-primary-green" : ""
                    } hover:text-primary-green`}
                    href={link.href}
                    key={index}
                  >
                    {link.label}
                  </Link>
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
