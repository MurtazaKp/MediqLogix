import { urlForImage } from "../../sanity/lib/image";

const refactorSetting = (data: any) => {
  return {
    headerMenus: data?.headerMenus,
    Footer: data?.Footer,
    logo: urlForImage(data?.logo),
  };
};

export { refactorSetting };
