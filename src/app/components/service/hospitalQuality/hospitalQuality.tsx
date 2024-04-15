import Blog from "@/app/components/blog/blog";
import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const HospitalQuality = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-8  text-[14.5px] leading-5">
      <PortableText
        value={portableText}
        components={myPortableTextComponents}
      />
    </div>
  );
};

export default HospitalQuality;
