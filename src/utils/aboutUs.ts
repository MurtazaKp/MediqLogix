import { urlForImage } from "../../sanity/lib/image";

const refactorAboutUs = (data: any) => {
  return {
    corporateGovernance: data?.corporateGovernance,
    aboutUs: data?.aboutUs,
    companyProfile: {
      ...data.companyProfile,
      image: urlForImage(data?.companyProfile.image),
    },
    visionMission: data?.visionMission.map((item: any) => ({
      ...item,
      image: urlForImage(item?.image),
    })),
  };
};

export { refactorAboutUs };
