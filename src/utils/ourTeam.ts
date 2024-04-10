import { urlForImage } from "../../sanity/lib/image";

const refactorOurTeam = (data: any) => {
  console.log(data, "dasjdaskldjaskljaskldjaskljasklj");

  return {
    teamMembers: data.teamMembers.map((item: any) => ({
      ...item,
      teamMember: {
        ...item?.teamMember,
        imageSrc: {
          alt: item.teamMember.imageSrc.alt,
          src: urlForImage(item.teamMember.imageSrc.src),
        },
      },
    })),
  };
};

export { refactorOurTeam };
