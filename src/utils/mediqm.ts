import { urlForImage } from "../../sanity/lib/image";

const refactorMediqm = (data: any) => {
  return {
    contact: data?.contact,
    career: data?.career,
    partners: data?.partners.map((item: any) => ({
      ...item,
      image: urlForImage(item?.image),
    })),
  };
};

export { refactorMediqm };
