import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const HospitalSafety = ({ portableText }: any) => {
  return (
    <div className="flex text-[14.5px] leading-5 flex-col gap-6 ">
      <PortableText
        value={portableText}
        components={myPortableTextComponents}
      />
    </div>
  );
};

export default HospitalSafety;
