import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";

import header from "./schemaTypes/object/header";
import footer from "./schemaTypes/object/footer";
import setting from "./schemaTypes/singleton/setting";
import herosection from "./schemaTypes/object/herosection";
import home from "./schemaTypes/singleton/home";
import productService from "./schemaTypes/object/productService";
import benefits from "./schemaTypes/object/benefits";
import richtext from "./schemaTypes/object/richtext";
import service from "./schemaTypes/singleton/service";
import dataAnalytics from "./schemaTypes/singleton/dataAnalytics";
import imageLeft from "./schemaTypes/object/imageLeft";
import aboutUs from "./schemaTypes/singleton/aboutUs";
import teamMember from "./schemaTypes/singleton/teamMember";
import teamDetails from "./schemaTypes/singleton/teamDetails";
import imageTextCta from "./schemaTypes/object/imageTextCta";
import softwareProduct from "./schemaTypes/singleton/softwareProduct";
import mediqm from "./schemaTypes/singleton/mediqm";
import teamDetailsPage from "./schemaTypes/singleton/teamDetailsPage/teamDetailsPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    header,
    footer,
    setting,
    productService,
    herosection,
    home,
    benefits,
    richtext,
    service,
    dataAnalytics,
    imageLeft,
    aboutUs,
    teamMember,
    teamDetails,
    imageTextCta,
    softwareProduct,
    mediqm,
    teamDetailsPage,
  ],
};
