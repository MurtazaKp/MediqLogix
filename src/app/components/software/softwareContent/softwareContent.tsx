import React from "react";
import PortableText from "react-portable-text";

const SoftwareContent = ({ portableText }: any) => {
  return (
    <div className="  text-[14.5px] leading-5">
      <PortableText content={portableText} />
    </div>
  );
};

export default SoftwareContent;
