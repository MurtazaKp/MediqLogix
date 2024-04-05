import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutUs",
  title: "About Us ",
  type: "document",

  fields: [
    defineField({
      name: "aboutUs",
      title: "About Us",
      type: "portableText",
    }),

    defineField({
      name: "corporateGovernance",
      title: "Corporate Governance",
      type: "portableText",
    }),

    defineField({
      name: "companyProfile",
      title: "Company Profile",
      type: "imageLeft",
    }),

    defineField({
      name: "visionMission",
      title: "Vision Mission",
      type: "array",
      of: [{ type: "imageLeft" }],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "About Us Page",
      };
    },
  },
});
