import React from "react";
import Blog from "../../blog/blog";

const ServiceContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-primary-green text-[18.5px] font-bold leading-5">
        Service
      </h3>
      <p className=" capitalize text-[14.5px]">
        MediQlogix’s software technology products are developed on clourd
        technology platforms for easy integration with your existing IT systems
        (Ex: COPE, Nursing, RX and Lab) in addition to an being a platform based
        technology for future enhancement. The MediQlogix’s technology is also
        available on on Cloud model, which is designed with flexibility to
        implement systems at a large hospital group..
      </p>
      {/* <Blog /> */}
    </div>
  );
};

export default ServiceContent;
