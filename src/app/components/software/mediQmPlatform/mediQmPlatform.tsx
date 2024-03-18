import React from "react";

const MediQmPlatform = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <h3 className="text-primary-green text-xl">MediQm Platform</h3>
        <p>
          MediQlogix software technology products are developed on clourd
          technology platforms for easy integration with your existing IT
          systems (Ex: COPE, Nursing, RX and Lab) in addition to an being a
          platform based technology for future enhancement. The MediQlogix’s
          technology is also available on on Cloud model, which is designed with
          flexibility to implement systems at a large hospital group.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis
          labore esse aperiam aliquam pariatur nesciunt consectetur deserunt
          molestiae recusandae sapiente architecto veritatis, praesentium
          dignissimos maiores quasi rerum libero optio.
        </p>

        <p>
          MediQlogix SaaS Operating Model The MediQlogix SaaS software product
          will include robust additional data extraction module and additional
          functionalities to round up the requirements of healthcare specialists
          across the hospital. As the software is delivered in a “software as a
          service” model and can be easily integrated with current in house IT
          systems, MediQM is capable of delivering advanced BI(Business
          Intelligence) reporting and data aggregation capabilities will be
          available.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white my-10">
          <img className=" mt-6 " src="/images/flow.jpg" />
          <p className="mr-40 font-bold"> Recreate </p>
        </div>
      </div>
    </div>
  );
};

export default MediQmPlatform;
