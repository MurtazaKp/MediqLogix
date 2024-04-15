import { defineField, defineType } from "sanity";

export default defineType({
  name: "dataAnalytics",
  title: "Data Analytics ",
  type: "document",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "dataAnalytics",
      title: "Data Analytics",
      type: "portableText",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Data Analytics Page",
      };
    },
  },
});
