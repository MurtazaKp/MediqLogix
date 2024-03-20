import React from "react";

const SoftwareContent = () => {
  return (
    <div>
      <h3 className="text-primary-green text-xl font-bold mb-5">
        Our Products
      </h3>
      <p className=" capitalize text-[14.5px] leading-5">
        <strong>MediQlogix</strong> software technology products are developed
        on clourd technology platforms for easy integration with your existing
        IT systems (Ex: COPE, Nursing, RX and Lab) in addition to an being a
        platform based technology for future enhancement. The MediQlogix’s
        technology is also available on on Cloud model, which is designed with
        flexibility to implement systems at a large hospital group.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white my-10">
        <img className=" mt-6 " src="/images/Infographic.svg" />
        <p className="mr-40 font-bold"> Recreate </p>
      </div>
    </div>
  );
};

export default SoftwareContent;
