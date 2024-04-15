import { urlForImage } from "../../sanity/lib/image";

const refactorSoftware = (data: any) => {
  return {
    software: data?.software,
    cloudMediqm: {
      ...data.cloudMediqm,

      imageContent: {
        ...data.cloudMediqm.imageContent,
        image: urlForImage(data?.cloudMediqm.imageContent.image),
      },
    },
    mediqmMobility: {
      ...data.mediqmMobility,
      image: urlForImage(data.mediqmMobility.image),
    },
    mediqmPlatform: {
      ...data.mediqmPlatform,
      imageContent: {
        ...data.mediqmPlatform.imageContent,
        image: urlForImage(data.mediqmPlatform.imageContent.image),
      },
    },
    mediqmSolution: {
      ...data.mediqmSolution,
      imageContent: {
        ...data?.mediqmSolution.imageContent,
        image: urlForImage(data?.mediqmSolution.imageContent.image),
      },
    },
  };
};

export { refactorSoftware };
