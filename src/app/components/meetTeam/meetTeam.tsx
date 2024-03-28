"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./modal";
import {
  TeamEight,
  TeamFive,
  TeamFour,
  TeamNine,
  TeamOne,
  TeamSeven,
  TeamSix,
  TeamThree,
  TeamTwo,
} from "../TeamContent";

const teamMembers = [
  {
    name: "Naveen Pola",
    role: "Ms Managing Director",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamOne,
  },
  {
    name: "Larry Deem MBA,",
    role: "Vice President - Sales",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamSix,
  },
  {
    name: "Jeffrey Dunn, MD MBA FACS",
    role: "Executive Vice Presidnent - Healthcare Business",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamFour,
  },
  {
    name: "Kathy Irvin, RN, BS",
    role: " Vice President – Clinical Management",
    imageSrc: "/images/Female.svg",
    teamDetail: TeamFive,
  },
  {
    name: "Gopi Krishna Pidatala",
    role: "Healthcare Industry Advisor",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamThree,
  },
  {
    name: "Dr. Preethi Adoni",
    role: "DA  M.B.B.S, Healthcare Advisor",
    imageSrc: "/images/Female.svg",
    teamDetail: TeamSeven,
  },
  {
    name: "Samual Johnson",
    role: "Chief Architect – Cloud Infrastructure ",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamEight,
  },
  {
    name: "Ravi Krishna Annadanam",
    role: " Business Strategy Advisor – Cloud Cyber Security ",
    imageSrc: "/images/Male.svg",
    teamDetail: TeamNine,
  },

  // {
  //   name: "Somesh Saxena",
  //   role: " Vice President – Product Development",
  //   imageSrc: "/images/Male.svg",
  //   teamDetail: TeamTwo,
  // },
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
            className="rounded-xl cursor-pointer group border border-gray-400 grayscale mx-auto hover:grayscale-0 transition duration-300 relative overflow-y-hidden flex justify-center items-end  w-full h-[250px] 2xl:w-[350px]"
          >
            <img
              width={100}
              height={100}
              className="w-7/12 lg:w-9/12 2xl:w-7/12 absolute 2xl:top-0 top-3"
              src={member.imageSrc}
              alt=""
            />
            <div className="text-white absolute w-full py-2 h-20 px-4  bg-secondary-black group-hover:bg-primary-green transition duration-500">
              <h3 className=" HelveticaNeue-Regular lg:text-sm xl:text-base">
                {member.name}
              </h3>
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
