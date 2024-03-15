import Link from "next/link";
import React from "react";

const ProductGrid = () => {
  const productGridData = [
    {
      icon: "cloudSolution",
      label: "Cloud Solution",
      paragrapgh:
        "Cloud solutions to the Hospital and Healthcare organizations.",
      buttonCta: {
        label: "know more",
        href: "#",
      },
      image: {
        src: "/images/cloudSolution.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Mobility",
      paragrapgh:
        "Provides Mobile services for Hospital Quality, Education and Hospital safety.",
      buttonCta: {
        label: "know more",
        href: "#",
      },
      image: {
        src: "/images/Mobility.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Consulting",
      paragrapgh:
        "Experts in Hospital Quality providing solutions to improve profitability.",
      buttonCta: {
        label: "know more",
        href: "#",
      },
      image: {
        src: "/images/Consulting.svg",
      },
    },
    {
      icon: "cloudSolution",
      label: "Data Analytics",
      paragrapgh:
        "Request for Demo please click and provide your basic contact details.",
      buttonCta: {
        label: "know more",
        href: "#",
      },
      image: {
        src: "/images/Data.svg",
      },
    },
  ];

  return (
    <div className=" bg-primary-green  py-10 px-10 lg:px-36">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-9 justify-evenly ">
        {productGridData.map((product, index) => {
          return (
            <div
              className={`text-white px-1 flex flex-col items-center lg:items-start justify-between gap-5 ${
                index != 3 ? "lg:border-r border-white" : ""
              } `}
              key={index}
            >
              <img
                className={` w-20 w-20 ${index == 0 ? "pt-5" : ""} `}
                src={product.image.src}
              />
              <h2 className=" text-tertiary-heading font-bold">
                {product.label}
              </h2>
              <p className="text-[16.5px] text-center lg:text-start">
                {product.paragrapgh}
              </p>
              <Link
                className="rounded-full border border-white w-7/12 py-1 text-center"
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
