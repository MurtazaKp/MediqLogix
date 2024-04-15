import React from "react";
import Blog from "../../blog/blog";
import PortableText from "react-portable-text";

const QualityManagement = ({ portableText }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-6  text-[14.5px] leading-5">
        <PortableText content={portableText} />
      </div>
      {/* <Blog /> */}
    </div>
  );
};

export default QualityManagement;
