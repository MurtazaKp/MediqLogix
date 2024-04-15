import Image from "next/image";
import Link from "next/link";
import React from "react";
import PortableText from "react-portable-text";

const MediQmMobility = ({ heading, portableText, image, buttonCta }: any) => {
  return (
    <div className="flex text-[14.5px]  flex-col gap-6">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="lg:w-6/12 2xl:w-4/12">
          <Image
            className="rounded-[18px] w-full h-auto"
            src={image}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <div className="lg:w-6/12 2xl:w-8/12 flex items-start justify-between flex-col gap-3">
          <div>
            <h3 className="text-[18.5px] mt-6 mb-5 leading-5 text-primary-green">
              {heading}
            </h3>
            <span className="text-[14.5px] leading-5">
              <PortableText content={portableText.portableText} />
            </span>
          </div>
          <Link
            className="py-2 hover:bg-black hover:text-white transition duration-300 border-black rounded-full px-8 border flex justify-center items-center "
            href={buttonCta.href}
          >
            {buttonCta.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediQmMobility;
