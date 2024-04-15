import { defineType, defineField } from "sanity";

export default defineType({
  name: "productServices",
  title: "Product Grid Item",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),

        defineField({
          name: "paragraph",
          title: "Paragraph",
          type: "text",
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
});
