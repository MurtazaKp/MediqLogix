import Image from "next/image";
import React, { useState } from "react";
import Modal from "./modal";
import {
  TeamFive,
  TeamFour,
  TeamOne,
  TeamSix,
  TeamThree,
  TeamTwo,
} from "../TeamContent";

const teamMembers = [
  {
    name: "Naveen Pola",
    role: "Ms Managing Director",
    imageSrc: "/images/teamOne1.webp",
    teamDetail: TeamOne,
  },
  {
    name: "Somesh Saxena",
    role: " Vice President – Product Development",
    imageSrc: "/images/teamTwo.webp",
    teamDetail: TeamTwo,
  },
  {
    name: "Reena Saxsena",
    role: " Vice President – Product Development",
    imageSrc: "/images/teamThree.webp",
    teamDetail: TeamThree,
  },
  {
    name: "Jeffrey Dunn, MD MBA FACS",
    role: "Executive Vice Presidnent - Healthcare Business",
    imageSrc: "/images/teamFour.webp",
    teamDetail: TeamFour,
  },
  {
    name: "Kathy Irvin, RN, BS",
    role: " Vice President – Clinical Management",
    imageSrc: "/images/teamFive.webp",
    teamDetail: TeamFive,
  },
  {
    name: "Larry Deem MBA,",
    role: "Vice President - Sales",
    imageSrc: "/images/teamSix.webp",
    teamDetail: TeamSix,
  },
];

const MeetTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const [teamDetail, setTeamDetail] = useState();
  const handleOpen = (index: any) => {
    setIsOpen(!isOpen);
    setOpenIndex(index);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const handleTeamMember = (member: any) => {
    setTeamDetail(member);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div
            onClick={() => handleTeamMember(member)}
            key={index}
            className="rounded-xl cursor-pointer group grayscale mx-auto hover:grayscale-0 transition duration-300 relative overflow-y-hidden flex justify-center items-end  w-full h-[250px] 2xl:w-[350px]"
          >
            <img
              width={100}
              height={100}
              className="w-full absolute 2xl:-top-10 -top-3"
              src={member.imageSrc}
              alt=""
            />
            <div className="text-white absolute w-full py-2 h-20 px-4 opacity-95 bg-secondary-black group-hover:bg-primary-green transition duration-500">
              <h3 className=" HelveticaNeue-Regular">{member.name}</h3>
              <p className="text-xs HelveticaNeue-Regular">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal
          handleClose={handleClose}
          openIndex={openIndex}
          teamDetail={teamDetail}
        />
      )}
    </>
  );
};

export default MeetTeam;
