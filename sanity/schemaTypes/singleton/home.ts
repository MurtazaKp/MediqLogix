import { CogIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",

  fields: [
    defineField({
      title: "Hero Section",
      name: "heroSection",
      type: "herosection",
    }),
    defineField({
      title: "Welcome Section",
      name: "welcomeSection",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "heading",
          type: "string",
        }),

        defineField({
          name: "content",
          title: "Content",
          type: "portableText",
        }),
      ],
    }),

    defineField({
      name: "productServicesGrid",
      title: "Product Services Section",
      type: "productServices",
    }),

    defineField({
      name: "benefitsSection",
      title: "Benefits Section",
      type: "featuresSection",
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
