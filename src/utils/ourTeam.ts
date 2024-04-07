import { urlForImage } from "../../sanity/lib/image";

const refactorOurTeam = (data: any) => {
  
    
  return {
    teamDetails:data.map((item: any) => ({
        ...item,
        teamMember:{
            ...item?.teamMember,
                imageSrc:{
                    alt:item.teamMember.imageSrc.alt,
                    src: urlForImage(item.teamMember.imageSrc.src)
                }


        }
      })),
  }

};

export { refactorOurTeam };
