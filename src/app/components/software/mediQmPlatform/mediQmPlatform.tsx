import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortableText from "react-portable-text";

const MediQmPlatform = ({ topContent, imageContent, heading }: any) => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col  text-[14.5px]">
      <h3 className="text-[18.5px] leading-5 text-primary-green">{heading}</h3>
      <p className="  text-[14.5px] pb-9 rounded-2xl">
        <PortableText content={topContent.portableText} />
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-[30px]">
        <div className="lg:w-6/12 2xl:w-3/12 flex ">
          <Image
            className="w-full h-auto rounded-lg"
            src={imageContent.image}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="lg:w-6/12 2xl:w-9/12 flex items-start justify-between flex-col gap-3">
          <div className="flex flex-col gap-3 pb-10 ">
            <PortableText content={imageContent.portableText.portableText} />
          </div>
          <Link
            className="py-2 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={imageContent.buttonCta.href}
          >
            {imageContent.buttonCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediQmPlatform;
