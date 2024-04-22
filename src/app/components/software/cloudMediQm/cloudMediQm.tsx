import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/utils/component";

const CloudMediQm = ({ imageContent, topContent, bottomContent }: any) => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col leading-5  text-[14.5px]">
      <PortableText
        value={topContent.portableText}
        components={myPortableTextComponents}
      />
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-7/12 bg-white p-5 rounded-lg">
          <img
            className="w-full h-auto"
            src={imageContent.image}
            alt="infographic image"
            width="0"
            height="200"
            sizes="100vw"
          />
        </div>
        <div className="lg:w-5/12 flex items-start flex-col gap-3">
          <h3 className="text-[18.5px] leading-5 text-primary-green">
            {imageContent.heading}
          </h3>
          <span>
            <PortableText
              value={imageContent.portableText.portableText}
              components={myPortableTextComponents}
            />
          </span>
          <Link
            className="py-2 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={imageContent.buttonCta.href}
          >
            {imageContent.buttonCta.label}
          </Link>
        </div>
      </div>
      <div className="portable-text-wrapper">
        <PortableText
          value={bottomContent.portableText}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default CloudMediQm;
