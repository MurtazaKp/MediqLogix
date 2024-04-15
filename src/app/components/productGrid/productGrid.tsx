import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductGrid = ({ data }: any) => {
  const productGridData = [
    {
      icon: "cloudSolution",
      label: "AI-powered Cloud Solutions",
      activeLink: "Cloud MediQM",
      paragrapgh:
        "AI-powered cloud solutions for hospital and healthcare organizations.",
      buttonCta: {
        label: "Know more",
        href: "/software/cloud-mediqm",
      },
      image: {
        src: "/images/Data.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Mobility",
      activeLink: "MediQM Mobility",
      paragrapgh:
        "Providing mobile services to ensure the quality, education, and safety of hospitals",
      buttonCta: {
        label: "Know more",
        href: "software/mediqm-mobility",
      },
      image: {
        src: "/images/Mobility.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Consulting",
      activeLink: "MediQM Platform",

      paragrapgh:
        "AI-powered tailored solutions by experts to enhance profitability",

      buttonCta: {
        label: "Know more",
        href: "/services/hospital-safety",
      },
      image: {
        src: "/images/Consulting.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Data Analytics",
      activeLink: "MediQM Solution",
      paragrapgh: "Data analytics for hospitals and healthcare organizations. ",
      buttonCta: {
        label: "Know more",
        href: "/data-analytics",
      },
      image: {
        src: "/images/cloudSolution.svg",
      },
    },
  ];

  return (
    <div className=" bg-primary-green py-14 px-10 xl:px-36 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-9 justify-evenly ">
        {Array.isArray(data) &&
          data?.map((product: any, index: number) => {
            return (
              <div
                className={`text-white pe-5 flex flex-col items-center  lg:items-start gap-5 justify-between  ${
                  index != 3 ? "lg:border-r border-white" : ""
                } `}
                key={index}
              >
                <Image
                  className={` w-20 h-auto ${index == 3 ? "mt-2" : ""} `}
                  src={product.image}
                  alt={product.label}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
                <h2 className="text-lg lg:text-lg xl:mb-10 xl:text-tertiary-heading leading-normal text-center lg:text-start font-bold lg:h-10">
                  {product.label}
                </h2>
                <p className="text-base sm:text-[16.5px]  text-center xl:mb-4 lg:text-start leading-6 lg:h-20">
                  {product.paragraph}
                </p>
                <Link
                  className="rounded-full text-[14.54px] hover:bg-white mt-5 hover:text-black text-white border border-white w-6/12 lg:w-[108px] py-2 text-center"
                  href={product.buttonCta.href}
                >
                  {product.buttonCta.label}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductGrid;
