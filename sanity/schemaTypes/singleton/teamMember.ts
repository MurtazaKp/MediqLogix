// teamMembersSchema.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "imageSrc",
      title: "Image Source",
      type: "object",
      fields: [
        defineField({
          name: "src",
          title: "src",
          type: "image",
          preview: {
            select: {
              imageUrl: "asset.url",
              title: "caption",
            },
          },
        }),
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
        }),
      ],
    }),
  ],
});
