import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const CompanyProfile = ({ image, content }: any) => {
  return (
    <div className="flex flex-col lg:flex-row text-[14.5px] justify-center items-center leading-5 gap-9">
      <img
        className="w-[400px] h-[266px] rounded-lg"
        src={image}
        alt="company profile image"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="lg:w-7/12 py-6 flex flex-col gap-3">
        <PortableText
          value={content.portableText}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default CompanyProfile;
