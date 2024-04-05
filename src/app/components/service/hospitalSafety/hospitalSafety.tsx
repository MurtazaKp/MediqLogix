import React from "react";
import PortableText from "react-portable-text";

const HospitalSafety = ({ portableText }: any) => {
  return (
    <div className="flex text-[14.5px] leading-5 flex-col gap-6 ">
      <PortableText content={portableText} />
    </div>
  );
};

export default HospitalSafety;
