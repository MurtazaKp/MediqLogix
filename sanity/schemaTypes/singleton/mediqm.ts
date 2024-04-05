import { CogIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "mediqmPage",
  title: "Mediqm Page",
  type: "document",

  fields: [
    defineField({
      title: "Partners",
      name: "partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "companyName",
              title: "Company Name",
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
              name: "companyDescription",
              title: "Company Description",
              type: "portableText",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "career",
      title: "Carrer",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "heading",
          type: "string",
        }),

        defineField({
          name: "formSrc",
          title: "Form Src",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "heading",
          type: "string",
        }),

        defineField({
          name: "formSrc",
          title: "Form Src",
          type: "string",
        }),
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: "Mediqm Page",
      };
    },
  },
});
