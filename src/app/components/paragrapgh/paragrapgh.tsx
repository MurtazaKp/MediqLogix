import React from "react";

const Paragrapgh = () => {
  return (
    <div className="px-10 xl:px-36 bg-black py-10 lg:py-14 text-white">
      <h2 className="text-xl sm:text-2xl mb-6 lg:text-[32px]">
        Welcome to <span className="text-[#4ef721]">MediQlogix</span>
      </h2>
      <p className="sm:text-lg text-sm  ">
        <span className="text-[#4ef721] leading-body-font"> MediQlogix </span>
        is a digital solution company providing AI and ML-powered SaaS platform
        to hospitals and healthcare organizations to enhance their{" "}
        <span className="font-bold">Global Quality Matrix</span> by taking
        advantage of the business benefits of cloud-based solutions. The
        company’s business vision is “To improve healthcare delivery by
        increasing quality, safety, reducing re-admits and finally transforming
        the operative room to enhance the healthcare delivery experience to
        patients at large.
      </p>
    </div>
  );
};

export default Paragrapgh;
