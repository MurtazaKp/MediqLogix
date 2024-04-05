import { CogIcon, ImageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "softwareProduct",
  title: "Software Products ",
  type: "document",

  fields: [
    defineField({
      name: "software",
      title: "Software Products",
      type: "portableText",
    }),

    defineField({
      name: "cloudMediqm",
      title: "Cloud Mediqm",
      type: "object",
      fields: [
        defineField({
          name: "topContent",
          title: "Top Content",
          type: "portableText",
        }),

        defineField({
          name: "imageContent",
          title: "Image Content",
          type: "imageTextCta",
        }),

        defineField({
          name: "bottomContent",
          title: "Bottom Content",
          type: "portableText",
        }),
      ],
    }),

    defineField({
      name: "mediqmMobility",
      title: "Mediqm Mobility",
      type: "imageTextCta",
    }),

    defineField({
      name: "mediqmPlatform",
      title: "Mediqm Platform",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "heading",
          type: "string",
        }),
        defineField({
          name: "topContent",
          title: "Top Content",
          type: "portableText",
        }),

        defineField({
          name: "imageContent",
          title: "Image Content",
          type: "imageTextCta",
        }),
      ],
    }),

    defineField({
      name: "mediqmSolution",
      title: "Mediqm Solution",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "heading",
          type: "string",
        }),
        defineField({
          name: "topContent",
          title: "Top Content",
          type: "portableText",
        }),

        defineField({
          name: "imageContent",
          title: "Image Content",
          type: "imageTextCta",
        }),

        defineField({
          name: "bottomContent",
          title: "Bottom Content",
          type: "portableText",
        }),
      ],
    }),

    // defineField({
    //   name: "mediqmSolution",
    //   title: "Mediqm Solution",
    //   type: "object",
    //   fields: [
    //     defineField({
    //       name: "heading",
    //       title: "heading",
    //       type: "string",
    //     }),
    //     defineField({
    //       name: "content",
    //       title: "content",
    //       type: "portableText",
    //     }),

    //     defineField({
    //       name: "imageContent",
    //       title: "Image Content",
    //       type: "imageTextCta",
    //     }),

    //     defineField({
    //       name: "content",
    //       title: "content",
    //       type: "portableText",
    //     }),
    //   ],
    // }),
  ],

  preview: {
    prepare() {
      return {
        title: "Software Page",
      };
    },
  },
});
