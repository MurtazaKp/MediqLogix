"use client";

import React from "react";
import { QualityIcon } from "../icons/quality";
import { FinancialIcon } from "../icons/financial";
import { DataIcon } from "../icons/data";
import { CloudIcon } from "../icons/cloud";
import Link from "next/link";

const Features = ({ mainHeading, features }: any) => {
  const FeatureData = [
    {
      heading: "Healthcare Quality",
      description:
        "At MediQlogix, we believe AI-powered data tools organize information to enhance the quality and safety standards of healthcare organizations.",
      icon: "quality",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "Financial Benefit",
      description:
        "MediQlogix’s team believes in the excellence of quality and patient safety to increase hospitals’ profitability. ",
      icon: "financial",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "Data Analytics",
      description:
        "MediQlogix provides big data and data analytics to improve health safety, profit margin, and customer satisfaction of healthcare organizations. ",
      icon: "data",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
    {
      heading: "AI-powered Technology ",
      description:
        "MediQlogix provides an AI-powered cloud-based platform to hospitals and healthcare organizations.",
      icon: "cloud",
      knowMoreCta: {
        label: "Know More",
        href: "#",
      },
    },
  ];

  const FeatureIcons: any = {
    quality: QualityIcon,
    financial: FinancialIcon,
    data: DataIcon,
    cloud: CloudIcon,
    // Add more social media icons as needed
  };

  const FeatureLink = ({ icon }: any) => {
    const IconComponent = FeatureIcons[icon];

    return <IconComponent />;
  };
  return (
    <div className="px-10 xl:px-36 py-14">
      <h4 className="  text-tertiary-heading text-center mb-8 font-semibold">
        {mainHeading}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features &&
          features?.map((feature: any, index: number) => {
            return (
              <div
                key={index}
                className="border rounded-lg hover:border-primary-green p-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* <div>{features && <FeatureLink {...feature} />}</div> */}
                  <div>
                    <h2 className=" text-[18.5px] text-primary-green font-semibold">
                      {feature.heading}
                    </h2>
                    <p className="text-[14.5px]  leading-normal pe-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Features;
