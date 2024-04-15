"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./modal";
import {
  TeamEight,
  TeamEleven,
  TeamFive,
  TeamFour,
  TeamNine,
  TeamOne,
  TeamSeven,
  TeamSix,
  TeamTen,
  TeamThirteen,
  TeamThree,
  TeamTwo,
} from "../TeamContent";

const teamMembers = [
  {
    name: "Naveen Pola, ",
    degree: "M.S.",
    role: "Managing Director",
    imageSrc: "/images/Navin.png",
    teamDetail: TeamOne,
  },
  // {
  //   name: "Jeffrey Dunn, ",
  //   degree: " M.D, MBA, F.A.C.S",
  //   role: "Executive Vice President - Healthcare Business",
  //   imageSrc: "/images/Male.svg",
  //   teamDetail: TeamFour,
  // },
  // {
  //   name: "Somesh Saxena",
  //   degree: "",
  //   role: " Vice President – Product Development",
  //   imageSrc: "/images/Male.svg",
  //   teamDetail: TeamTwo,
  // },

  {
    name: "Kathy Irvin, ",
    degree: "R.N, B.S.",
    role: " Vice President – Clinical Management",
    imageSrc: "/images/Female.svg",
    teamDetail: TeamFive,
  },
  {
    name: "Samual Johnson",
    degree: "",
    role: "Chief Architect – Cloud Infrastructure ",
    imageSrc: "/images/Samuel.png",
    teamDetail: TeamEight,
  },
  {
    name: "Prasad.J ",
    degree: "",
    role: "Chief Architect – Artificial Intelligence and Robotics",
    imageSrc: "/images/Prasad.png",
    teamDetail: TeamTen,
  },
  {
    name: "Gopi Krishna Pidatala",
    degree: "",
    role: "Healthcare Industry Advisor",
    imageSrc: "/images/Gopi.png",
    teamDetail: TeamThree,
  },
  {
    name: "Dr. Preethi Adoni, ",
    degree: "D.A, M.B.B.S",
    role: "Healthcare Advisor",
    imageSrc: "/images/Preethi.png",
    teamDetail: TeamSeven,
  },

  {
    name: "Ravi Krishna Annadanam",
    degree: "",
    role: " Business Strategy Advisor – Cloud Cyber Security ",
    imageSrc: "/images/Ravi.png",
    teamDetail: TeamNine,
  },

  {
    name: "Nagin. Kasinadhuni ",
    degree: "",
    role: "Strategic Advisor – Startups",
    imageSrc: "/images/Nagin.png",
    teamDetail: TeamEleven,
  },
  {
    name: "Rama Velpuri, ",
    degree: "",
    role: "Strategic Advisor – Startups",
    imageSrc: "/images/Rama.png",
    teamDetail: TeamThirteen,
  },
  {
    name: "Larry Deem, ",
    degree: "MBA",
    role: "Vice President - Sales",
    imageSrc: "/images/Larry.jpg",
    teamDetail: TeamSix,
  },
];

const MeetTeam = ({ teamMembers }: any) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4">
        {teamMembers.map((member: any, index: number) => (
          <div
            onClick={() => handleTeamMember(member)}
            key={index}
            className="rounded-xl cursor-pointer group border border-gray-400 grayscale mx-auto hover:grayscale-0 transition duration-300 relative overflow-y-hidden flex justify-center items-end  w-full h-[250px] "
          >
            <Image
              width={250}
              height={250}
              className={`w-full top-0 sm:-top-2 lg:top-0  ${
                index === 0 ? "w-full" : "lg:w-full"
              } absolute 2xl:-top-4 lg:top-0`}
              src={member.teamMember.imageSrc.src}
              alt=""
            />
            <div className="text-white absolute w-full py-2 h-[70px] 2xl:h-16 px-4  bg-secondary-black group-hover:bg-primary-green transition duration-500">
              <h3 className=" HelveticaNeue-Regular sm:text-sm lg:text-sm xl:text-base">
                {member.teamMember.name}{" "}
                {member.teamMember.degree && (
                  <span className="text-[0.625rem] text-[#cccccc]">
                    ( {member.teamMember.degree} )
                  </span>
                )}
              </h3>
              <p className="text-xs HelveticaNeue-Regular">
                {member.teamMember.role}
              </p>
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
