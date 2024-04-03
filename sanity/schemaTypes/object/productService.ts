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
          name: "icon",
          title: "Icon",
          type: "string",
        }),
        defineField({
          name: "label",
          title: "Label",
          type: "string",
        }),
        defineField({
          name: "activeLink",
          title: "Active Link",
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
          name: "image",
          title: "Image",
          type: "image",
        }),
      ],
    },
  ],
});
