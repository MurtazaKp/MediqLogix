import { CogIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      type: "string",
      name: "projectName",
      title: "Project Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "image",
      name: "logo",
      title: "Logo",
      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: "logoAlt",
          type: "string",
          title: "Alt text",
          description:
            "Alternative text for screenreaders. Falls back on caption if not set",
        }),
      ],
    }),
    defineField({
      title: "Header Menus",
      name: "headerMenus",
      type: "header",
    }),

    defineField({
      title: "Footer Menus",
      name: "Footer",
      type: "footer",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
