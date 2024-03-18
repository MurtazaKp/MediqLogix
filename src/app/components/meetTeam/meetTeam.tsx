import Image from "next/image";
import React, { useState } from "react";
import Modal from "./modal";

// Sample data for team members

const teamMembers = [
  {
    name: "Naveen Pola",
    role: "Ms Managing Director",
    imageSrc: "/images/teamOne.jpg",
  },
  {
    name: "Somesh Saxena",
    role: " Vice President – Product Development",
    imageSrc: "/images/teamtwo.jpg",
  },
  {
    name: "Reena Saxsena",
    role: " Vice President – Product Development",
    imageSrc: "/images/teamthree.jpg",
  },
  {
    name: "Jeffrey Dunn, MD MBA FACS",
    role: "Executive Vice Presidnent - Healthcare Business",
    imageSrc: "/images/teamFour.jpg",
  },
  {
    name: "Kathy Irvin, RN, BS",
    role: " Vice President – Clinical Management",
    imageSrc: "/images/teamFive.jpg",
  },
  {
    name: "Larry Deem MBA,",
    role: "Vice President - Sales",
    imageSrc: "/images/teamSix.jpg",
  },
];

const MeetTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);
  const handleOpen = (index: any) => {
    setIsOpen(!isOpen);
    setOpenIndex(index);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            onClick={() => handleOpen(index)}
            key={index}
            className="rounded-xl group grayscale hover:grayscale-0 transition duration-300 relative overflow-y-hidden flex items-end w-[260px] h-[260px]"
          >
            <img
              width={100}
              height={100}
              className="w-full absolute -top-3"
              src={member.imageSrc}
              alt=""
            />
            <div className="text-white absolute w-full ps-5 opacity-95 bg-secondary-black group-hover:bg-primary-green transition duration-500">
              <h3 className="pt-4">{member.name}</h3>
              <p className="text-xs pb-9">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && <Modal handleClose={handleClose} openIndex={openIndex} />}
    </>
  );
};

export default MeetTeam;
