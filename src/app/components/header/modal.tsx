import Link from "next/link";
import React from "react";
import { FacebookIcon } from "../icons/facebook";
import { LinkedinIcon } from "../icons/linkedinIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { LogoIcon } from "../icons/logo";
import { FooterLogoIcon } from "../icons/footerLogo";
import { usePathname } from "next/navigation";

const Modal = ({ handleClose }: any) => {
  const ModalData = {
    heading: "Navigation",
    navLinks: [
      {
        label: "About Us",
        href: "/about",
        subLinks: [
          {
            label: "Company Profile",
            href: "/companyProfile",
          },
          {
            label: "Vision and Mission",
            href: "/vision",
          },
          {
            label: "Company Profile",
            href: "/ourTeam",
          },
          {
            label: "Company Profile",
            href: "/corporate",
          },
        ],
      },
      {
        label: "Software Products",
        href: "/software",
        subLinks: [
          {
            label: "CloudMediQm",
            href: "/cloudmediqm",
          },
          {
            label: "mediqmMobility",
            href: "/mediqmMobility",
          },
          {
            label: "mediqmplatform",
            href: "/mediqmplatform",
          },
          {
            label: "mediqmsolution",
            href: "/mediqmsolution",
          },
        ],
      },
      {
        label: "Service",
        href: "/service",
        subLinks: [
          {
            label: "CloudMediQm",
            href: "/CloudMediQm",
          },
          {
            label: "Quality Management",
            href: "/qualityManagement",
          },
          {
            label: "hospitalSafety",
            href: "/mediqmplatform",
          },
        ],
      },
      {
        label: "My MediQM",
        href: "/mediqm",
        subLinks: [
          {
            label: "CloudMediQm",
            href: "/CloudMediQm",
          },
          {
            label: "Quality Management",
            href: "/qualityManagement",
          },
          {
            label: "hospitalSafety",
            href: "/mediqmplatform",
          },
        ],
      },
    ],
  };

  const pathname = usePathname();

  return (
    <div className="fixed meet-team inset-0 z-[60] min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
      {/* <!-- overlay --> */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full  backdrop-blur-xl cursor-pointer"
      ></div>

      {/* <!-- Modal --> */}
      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="w-full  bg-[#111111] cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-3xl lg:rounded-[50px] mx-auto max-w-xl lg:max-w-3xl py-20 pl-10 pr-7 lg:pl-32 lg:pr-28">
          <button
            type="button"
            className="absolute top-8 right-8 rtl:right-auto rtl:left-2"
          >
            <svg
              className="h-10 p-2 w-10 bg-gray-600 rounded-full cursor-pointer text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              onClick={handleClose}
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>
          <div>
            <h5 className="text-[#adadad] mb-10 ps-3 text-xs lg:text-base">
              {ModalData.heading}
            </h5>
            <ul className="flex flex-col gap-5 ">
              {ModalData.navLinks.map((links, index) => {
                return (
                  <Link
                    className=""
                    onClick={handleClose}
                    href={links.href}
                    key={index}
                  >
                    {" "}
                    <li
                      className={` text-tertiary-heading ps-3 leading-tertiary-heading lg:leading-secondary-heading lg:text-secondary-heading ${
                        pathname === links.href
                          ? "text-primary-green border-s-2 border-primary-green"
                          : "text-white"
                      } `}
                    >
                      {links.label}
                    </li>
                  </Link>
                );
              })}
            </ul>

            <div className="mt-14 ps-3 gap-4 flex justify-between">
              <span>
                <p className="text-[#adadad] mb-3">Follow us</p>
                <div className="flex gap-2 ">
                  <a href="https://www.facebook.com/">
                    {" "}
                    <FacebookIcon color="#42ad25" />
                  </a>
                  <a href="https://www.linkedin.com">
                    <LinkedinIcon color="#42ad25" />
                  </a>
                  <a href="https://www.youtube.com/">
                    <YoutubeIcon color="#42ad25" />
                  </a>
                </div>
              </span>
              <div className="flex justify-start lg:justify-end items-end">
                <div className=" w-8/12 lg:w-6/12">
                  <FooterLogoIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
