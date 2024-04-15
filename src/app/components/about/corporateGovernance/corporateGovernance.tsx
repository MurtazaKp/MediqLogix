import React from "react";
import PortableText from "react-portable-text";

const CorporateGovernance = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-10  ">
      <div className="flex gap-5 flex-col  text-[14.5px] leading-5 portable-text-wrapper">
        <PortableText content={portableText} />
      </div>
    </div>
  );
};

export default CorporateGovernance;
