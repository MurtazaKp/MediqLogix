import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const AboutContent = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-5   text-[14.5px] ">
      <PortableText
        value={portableText}
        components={myPortableTextComponents}
      />
    </div>
  );
};

export default AboutContent;
