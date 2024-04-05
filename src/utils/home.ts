import { urlForImage } from "../../sanity/lib/image";

const refactorHome = (data: any) => {
  return {
    heroSection: {
      slides: data?.heroSection?.slides.map((item: any) => ({
        ...item,
        image: urlForImage(item?.image),
      })),
    },
    welcomeSection: data?.welcomeSection,
    productServicesGrid: data?.productServicesGrid.map((item: any) => ({
      ...item,
      image: urlForImage(item?.image),
    })),
    benefitsSection: data?.benefitsSection,
  };
};

export { refactorHome };
