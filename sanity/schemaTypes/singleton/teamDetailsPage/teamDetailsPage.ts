// teamMembersSchema.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),

    defineField({
      title: "Team Members",
      name: "teamMembers",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "teamDetails",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
});
