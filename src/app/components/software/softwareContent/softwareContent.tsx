import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const SoftwareContent = ({ portableText }: any) => {
  return (
    <div className="  text-[14.5px] leading-5">
      <PortableText
        value={portableText}
        components={myPortableTextComponents}
      />
    </div>
  );
};

export default SoftwareContent;
