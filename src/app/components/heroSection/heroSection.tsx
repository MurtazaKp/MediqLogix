import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex flex-col  bg-black px-36 relative  ">
      <div className="absolute inset-0 z-10 ">
        <img className="" src="/images/backgroud.png" />
      </div>
      <h1 className="w-2/12 text-primary-heading leading-primary-heading pt-[106px] pb-[157px] text-primary-blue ">
        <span className="text-primary-green ">CLOUD </span>SOLUTION
      </h1>

      <div>
        <p className=" text-secondary-heading leading-secondary-heading text-white w-[700px]">
          Cloud solutions to the Hospital and Healthcare organizations.
        </p>
        <p> </p>
      </div>
    </div>
  );
};

export default HeroSection;
