import React from "react";
import {
  TeamFive,
  TeamFour,
  TeamOne,
  TeamSix,
  TeamThree,
  TeamTwo,
} from "../TeamContent";
const TeamContent: any = {
  teamOne: TeamOne,
  teamTwo: TeamTwo,
  teamThree: TeamThree,
  teamFour: TeamFour,
  teamFive: TeamFive,
  teamSix: TeamSix,
  // Add more social media icons as needed
};

const TeamDataContent = ({ teamNumber }: any) => {
  const IconComponent = TeamContent[teamNumber];

  return <IconComponent />;
};

const Modal = ({ handleClose, openIndex, teamDetail }: any) => {
  const teamMembers = [
    {
      name: "Naveen Pola",
      role: "MS, Managing Director",
      imageSrc: "/images/teamOne.jpg",
      teamNumber: "teamOne",
    },
    {
      name: "Joey Smith",
      role: " Vice President – Product Development",
      imageSrc: "/images/teamtwo.jpg",
      teamNumber: "teamTwo",
    },
    {
      name: "Reena Saxsena",
      role: " Vice President – Product Development",
      imageSrc: "/images/teamthree.jpg",
      teamNumber: "teamOne",
    },
    {
      name: "Mathew smith",
      role: "Vice President – Clinical Management",
      imageSrc: "/images/teamFour.jpg",
      teamNumber: "teamFour",
    },
    {
      name: "Reena Saxsena",
      role: " Vice President - Sales",
      imageSrc: "/images/teamFive.jpg",
      teamNumber: "teamFive",
    },
    {
      name: "Mary Hudson",
      role: "Chief Technical Officer",
      imageSrc: "/images/teamSix.jpg",
      teamNumber: "teamSix",
    },
  ];

  return (
    <div className="fixed inset-0 z-[80] min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
      {/* <!-- overlay --> */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full  backdrop-blur-xl cursor-pointer"
      ></div>

      {/* <!-- Modal --> */}
      <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div className="w-full  bg-[#111111] cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-3xl lg:rounded-[50px] mx-auto max-w-xl lg:max-w-5xl xl:max-w-6xl px-10  lg:px-16 py-16 lg:py-8 xl:py-16">
          <button
            type="button"
            className="absolute top-4 right-4 lg:top-8 lg:right-8 rtl:right-auto rtl:left-2"
          >
            <svg
              className="h-10 p-2 w-10 bg-gray-600 rounded-full cursor-pointer text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              onClick={handleClose}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-11 xl:gap-16 ">
            <div className=" lg:w-4/12">
              <img
                className="w-full border rounded-lg border-[#707070] h-full flex justify-center items-end"
                src={teamDetail?.imageSrc}
              />
            </div>
            <div className="text-white lg:w-8/12">
              <div className="pb-5">
                <h3 className="text-primary-green text-[18.5px]  HelveticaNeue-Regular">
                  {teamDetail?.name}{" "}
                  {teamDetail.degree && (
                    <span className="text-[0.625rem] text-[#cccccc]">
                      ( {teamDetail?.degree} )
                    </span>
                  )}
                </h3>
                <p className="text-[14.5px]">{teamDetail?.role}</p>
              </div>
              <div
                id="meetTeam"
                className="h-[407px] flex flex-col gap-5 overflow-y-scroll pe-10 HelveticaNeue-Regular HelveticaNeue-Regular text-[14.5px] leading-5"
                // dangerouslySetInnerHTML={{ __html: teamDetail?.teamDetail }}
              >
                <teamDetail.teamDetail />
                {/* {teamDetail.teamDetail} */}

                {/* <p className="HelveticaNeue-Regular text-[14.5px] leading-5">
                  Mr. Navin worked in the information technology industry - NEC,
                  Bay Networks, Nortel, Com21 and Lucent Technologies in
                  software/product development, marketing and management
                  leadership. Currently Mr. Pola is responsible operations and
                  managing their software development operations in India.
                </p>
                <p className="HelveticaNeue-Regular text-[14.5px] leading-5">
                  Since 2001, Mr. Navin, has been involved in starting up US
                  companies in India - Time2Market (Chip design company, parent
                  company based out of California, USA), MIC Electronics (LED,
                  Embedded Systems Company based out of Hyderabad, India) ,
                  BayNest (IT Consulting), MicroNet (ISP), and iCST. During the
                  start up phase for “Time2Market”, India, Mr. Navin was
                  involved in strategic decisions of company on new product
                  development and product marketing planning for Indian Market.{" "}
                </p>
                <p className="HelveticaNeue-Regular text-[14.5px] leading-5">
                  Mr. Pola’s expertise includes working with the Indian
                  government in establishing technology development centers,
                  operations of companies and managing Indian operations from
                  scratch. In his capacity as a director for “Time2Market” Mr.
                  Pola has significant experience in setting up the operations,
                  participated in the merger of “Time2Market” with InfoTech,
                  Hyderabad, India. Mr. Pola has also successfully completed
                  assignments for MicroNet co-founder and iCSt (India) in the
                  capacity of Director. He was instrumental in convincing the
                  management of iCST (USA) and successfully launching part of
                  operations in India.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
