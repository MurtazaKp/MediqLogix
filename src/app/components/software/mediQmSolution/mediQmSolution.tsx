import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortableText from "react-portable-text";

const MediQmSolution = ({
  heading,
  topContent,
  bottomContent,
  imageContent,
}: any) => {
  return (
    <div className="flex gap-4 sm:gap-7 lg:gap-4 flex-col  text-[14.5px] ">
      <h3 className="text-[18.5px] leading-5 text-primary-green font-bold">
        {heading}
      </h3>
      <div className="  text-[14.5px]">
        <PortableText content={topContent.portableText} />
      </div>
      <div className="flex flex-col lg:flex-row  gap-10">
        <div className="lg:w-6/12 2xl:w-4/12 ">
          <Image
            className="w-full h-auto rounded-lg"
            src={imageContent.image}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="lg:w-6/12 2xl:w-8/12 2xl:justify-center flex items-start flex-col gap-7">
          <div className="portable-text-wrapper">
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
      <div>
        <PortableText content={bottomContent.portableText} />
      </div>
    </div>
  );
};

export default MediQmSolution;
