import React from "react";

const CloudMediQm = () => {
  return (
    <div className="flex gap-4 flex-col">
      <h3 className="text-primary-green leading-5 text-[22.5px] font-bold">
        Cloud MediQm
      </h3>
      <p className=" capitalize text-[14.5px]"></p>Hospitals are increasingly
      challenged to collect more quality data for improving performance,
      reporting to other organizations (Insurance, CMS and NSQIP), and the
      demands are becoming even greater due to current healthcare environment.
      <p className=" capitalize text-[14.5px]">
        In the present environment data collection for Clinical Quality
        Management and safety Management is most often manual, requiring highly
        skilled clinical staff to focus on performing manual tasks. The
        MediQLogix solution “MediQM”, uniquely provides electronically driven IT
        collection of most of this data in near real-time from a hospital’s
        preexisting IT systems, markedly reducing the cost of data collection
        and providing real-time data for performance improvement processes.
      </p>
      <p className="font-bold">The MediQlogix SaaS Software Product</p>
      <p className=" capitalize text-[14.5px]">
        MediQlogix SaaS Operating Model will include robust additional data
        extraction module and additional functionalities to round up the
        requirements of healthcare specialists across the hospital. As the
        software is delivered in a “software as a service” model and can be
        easily integrated with current in house IT systems, MediQM is capable of
        delivering advanced BI(Business Intelligence) reporting and data
        aggregation capabilities will be available.
      </p>
      <p className=" capitalize text-[14.5px]">
        MediQM’s automatic data extraction module can help your bottom line by
        replacing full time staff who are now collecting quality data and
        significantly increase the productivity for a hospital. MediQM will have
        the additional capabilities within the software to extend it’s
        capabilities for workflow, business process management which in turn can
        help additional business areas (care management, supply chain management
        and financial reconciliation) of the hospital. This will create an
        excellent financial benefit to each hospital client as expensive nursing
        resources as well as personnel are redeployed for value added activities
        with the patient population.
      </p>
      <p className=" capitalize text-[14.5px]">
        The SaaS implementation will significantly differentiate MediQLogix from
        other competitors in the market. We have the ability to provide hospital
        chains with a data warehouse updated in real-time from multiple
        hospitals for following capabilities.
      </p>
      <ul className="list-disc">
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The ability of large hospital groups to monitor their operating
            units in real-time.
          </p>
        </li>{" "}
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The ability to benchmark against various groups such as peer
            hospitals, best in class, or self selected.
          </p>
        </li>{" "}
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            The ability to offer additional business functions for hospital care
            management improvements.
          </p>
        </li>
        <li className="text-primary-green">
          <p className="text-black text-[14.5px] leading-5">
            {" "}
            The ability to rapidly identify a bio terrorism event and map the
            potential exposure areas.{" "}
          </p>
        </li>
      </ul>
      <div className="flex items-center justify-between bg-white my-10">
        <img className=" mt-6 " src="/images/infographic.svg" />
        <p className="mr-40 font-bold"> Recreate </p>
      </div>
    </div>
  );
};

export default CloudMediQm;
