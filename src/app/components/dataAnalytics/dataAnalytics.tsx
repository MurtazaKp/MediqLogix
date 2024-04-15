import React from "react";
import PortableText from "react-portable-text";

const DataAnalytics = ({ heading, dataAnalytics }: any) => {
  return (
    <div className=" py-12 pb-[30px] bg-secondary-gray xl:min-h-[calc(100vh-424px)]">
      <div className=" mx-auto sm:px-6 xl:px-[139px] px-8 ">
        <div className="w-full pb-1 overflow-x-auto">
          <nav className="flex flex-col lg:flex-row justify-between items-stretch sm:items-center gap-4 py-1">
            <p className=" text-lg  sm:text-[22.5px]  leading-5 text-primary-blue font-bold">
              {heading}
            </p>
          </nav>
        </div>
        <div className="flex flex-col gap-8  text-[14.5px] leading-5 pt-[30px]">
          <PortableText content={dataAnalytics.portableText} />
        </div>

        {/* <Blog /> */}
      </div>
    </div>
  );
};

export default DataAnalytics;
