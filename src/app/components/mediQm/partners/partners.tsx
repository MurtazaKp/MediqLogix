import Image from "next/image";
import React from "react";
import PortableText from "react-portable-text";

const Partners = ({ data }: any) => {
  return (
    <div className=" ">
      {data.map((item: any, index: number) => {
        return (
          <div key={index} className=" mb-6">
            <div className="flex justify-between items-center">
              <h4 className="text-[18.5px] font-bold leading-5 text-primary-green">
                {item.companyName}
              </h4>
              <Image
                className=" mix-blend-darken "
                src={item.image}
                alt="Microsoft"
                width={index === 3 ? "120" : "150"}
                height="100"
              />
            </div>
            <div>
              <PortableText content={item.companyDescription.portableText} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Partners;
