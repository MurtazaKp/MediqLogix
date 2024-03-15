import React from "react";

const Paragrapgh = () => {
  return (
    <div className="px-10 lg:px-36 bg-black py-20 text-white">
      <h2 className="text-secondary-heading">
        Welcome to <span className="text-primary-green">MediQlogix</span>
      </h2>
      <p className="text-lg">
        <span className="text-primary-green"> MediQlogix</span> provides
        hospitals and healthcare organizations with IT (Information technology)
        solutions for Quality and Safety measures using SaaS (Software as a
        Services) or Internal Single Install Systems. The company is founded by
        a principle that to improve healthcare delivery, an organization must
        address the quality and safety issues to avoid decease complications and
        re-admits due to poor management of Quality within the organization.
      </p>
    </div>
  );
};

export default Paragrapgh;
