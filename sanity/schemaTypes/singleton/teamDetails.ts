// teamMembersSchema.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamDetails",
  title: "Team Details",
  type: "document",
  fields: [

    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),

    defineField({
      title: "Team Details",
      name: "teamDetails",
      type: "portableText",
    }),
    defineField({
      title: "Team Member",
      name: "teamMember",
      type: "reference",
      to: [
        {
          type: "teamMember",
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
