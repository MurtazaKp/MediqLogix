import { defineField, defineType } from "sanity";

export default defineType({
  name: "herosection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
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
          ],
        },
      ],
    }),
  ],
  initialValue: {
    slides: [
      {
        title: "AI-Powered",
        subtitle: "Cloud Solutions",
        description:
          "AI-Powered cloud solutions for hospital and healthcare organizations.",
      },
      {
        title: "Mobility",
        subtitle: "Services",
        description:
          "Providing mobile services to ensure the quality, education, and safety of hospitals",
      },
      {
        title: "Consulting",
        subtitle: "Services",
        description:
          "AI-Powered tailored solutions by experts to enhance profitability",
      },
      {
        title: "Data",
        subtitle: "Analytics",
        description:
          "Data analytics for hospitals and healthcare organizations.",
      },
    ],
  },
});
