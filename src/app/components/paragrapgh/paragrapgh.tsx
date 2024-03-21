import React from "react";

const Paragrapgh = () => {
  return (
    <div className="px-10 lg:px-36 bg-black py-20 text-white">
      <h2 className="text-xl sm:text-2xl mb-3 lg:text-[40px]">
        Welcome to <span className="text-primary-green">MediQlogix</span>
      </h2>
      <p className="text-lg capitalize">
        <span className="text-primary-green leading-body-font">
          {" "}
          MediQlogix
        </span>{" "}
        a digital solution company providing AI and ML-powered platform to
        hospitals and healthcare organizations’ needs to enhance their “Global
        Quality Matrix”. The platform is based on Saas (Software As A Service)
        or Internal Single Install Systems. The company’s foundation is “to
        improve healthcare deliveries by reducing quality and safety issues,
        re-admits and enhance the management structure of the healthcare
        organization”.
      </p>
    </div>
  );
};

export default Paragrapgh;
