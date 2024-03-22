import React from "react";

const CorporateGovernance = () => {
  return (
    <div className="flex flex-col gap-10 mt-9 capitalize">
      <p className="text-[14.5px] leading-5">
        “Good corporate governance practices instill in companies the essential
        vision, processes, and structures to make decisions that ensure
        longer-term sustainability. More than ever, we need companies that can
        be profitable as well as achieve environmental, social, and economic
        value for society.”
        <p className="font-bold">
          - Rachel Kyte | Vice President, Business Advisory Services, IFC
        </p>
      </p>
      <div className="flex gap-5 flex-col capitalize text-[14.5px] leading-5">
        <p className="font-bold text-primary-green">
          Governance and Citizenship at MediQlogix
        </p>
        <p className="">
          MediQlogix, a digital solution company, plays a pivotal role in
          influencing the healthcare and life science industry. We are
          accountable to our shareholders, customers, and employees. Our primary
          objective is to conduct our operations with responsibility and
          sustainability in mind. The application of corporate governance
          principles serves to uphold standards of ethical and legal behavior.
        </p>
        <p className="font-bold">
          MediQlogix has embraced corporate governance principles rooted in the
          following core values:
        </p>
        <ul className=" list-disc ps-5 text-primary-green flex flex-col gap-3">
          <li>
            <p className="text-black">
              Exemplary Corporate Governance Standards - Adhering to current
              corporate governance norms and vigilantly monitoring the evolving
              landscape of corporate governance to surpass the prevailing
              standards significantly.
            </p>
          </li>
          <li>
            <p className="text-black">
              Prudent Decision Making - Making decisions that serve the companys
              best interests while considering the impact on its employees,
              customers, the environment, and the communities in which it
              operates.
            </p>
          </li>
          <li>
            <p className="text-black">
              Upholding Ethical Standards - Conducting the companys affairs in a
              manner aligned with the highest ethical standards and complying
              with the latter and spirit of relevant laws, rules, and
              regulations.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CorporateGovernance;
