import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageLeft",
  title: "Image Left ",
  type: "object",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          description:
            "Alternative text for screenreaders. Falls back on caption if not set",
        }),
      ],
    }),

    defineField({
      name: "content",
      title: "Content",
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
