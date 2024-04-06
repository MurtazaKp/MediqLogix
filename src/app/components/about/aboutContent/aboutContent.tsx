import React from "react";
import PortableText from "react-portable-text";

const AboutContent = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-5   text-[14.5px] ">
      <PortableText content={portableText} />
    </div>
  );
};

export default AboutContent;
