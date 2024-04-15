import React from "react";
import Blog from "../../blog/blog";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const ServiceContent = ({ portableText }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="  text-[14.5px]">
        <PortableText
          value={portableText}
          components={myPortableTextComponents}
        />
      </div>
      {/* <Blog /> */}
    </div>
  );
};

export default ServiceContent;
