import { CogIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "servicePage",
  title: "Service ",
  type: "document",

  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "portableText",
    }),
    defineField({
      name: "hospitalQuality",
      title: "Hospital Quality",
      type: "portableText",
    }),

    defineField({
      name: "qualityManagement",
      title: "Quality Management",
      type: "portableText",
    }),

    defineField({
      name: "hospitalSafety",
      title: "Hospital Safety",
      type: "portableText",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Service Page",
      };
    },
  },
});
