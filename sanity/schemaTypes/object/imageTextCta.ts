import { defineField, defineType } from "sanity";

export default defineType({
  name: "imageTextCta",
  title: "Content ",
  type: "object",

  fields: [
    defineField({
      name: "heading",
      title: "heading",
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
      name: "portableText",
      title: "Portable Text",
      type: "portableText",
    }),

    defineField({
      name: "buttonCta",
      title: "Button CTA",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "href",
          title: "Href",
          type: "string",
        }),
      ],
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
