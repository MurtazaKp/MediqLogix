import Blog from "@/app/components/blog/blog";
import React from "react";
import PortableText from "react-portable-text";

const HospitalQuality = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-8  text-[14.5px] leading-5">
      <PortableText content={portableText} />
    </div>
  );
};

export default HospitalQuality;
