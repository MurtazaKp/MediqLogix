import React from "react";
import Blog from "../../blog/blog";
import PortableText from "react-portable-text";

const ServiceContent = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="  text-[14.5px]">
        <PortableText content={portableText} />
      </div>
      {/* <Blog /> */}
    </div>
  );
};

export default ServiceContent;
