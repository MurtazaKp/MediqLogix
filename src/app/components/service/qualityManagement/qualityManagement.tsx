import React from "react";
import Blog from "../../blog/blog";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const QualityManagement = ({ portableText }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-6  text-[14.5px] leading-5">
        <PortableText
          value={portableText}
          components={myPortableTextComponents}
        />
      </div>
      {/* <Blog /> */}
    </div>
  );
};

export default QualityManagement;
