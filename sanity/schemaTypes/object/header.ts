import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
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
              name: "href",
              title: "Href",
              type: "string",
            }),
            defineField({
              name: "sublink",
              title: "Sublinks",
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
                      name: "href",
                      title: "Href",
                      type: "string",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  initialValue: {
    heading: "Navigation",
    navLinks: [
      {
        label: "About Us",
        href: "/about",
        sublink: [
          {
            label: "Company Profile",
            href: "/company-profile",
          },
          {
            label: "Vision and Mission",
            href: "/vision-mission",
          },
          {
            label: "Our Team",
            href: "/our-team",
          },
          {
            label: "Corporate Governance",
            href: "/corporate-governance",
          },
        ],
      },
      {
        label: "Software Products",
        href: "/software",
        sublink: [
          {
            label: "Cloud MediQM",
            href: "/software/cloud-mediqm",
          },
          {
            label: "MediQM Mobility",
            href: "/software/mediqm-mobility",
          },
          {
            label: "MediQM platform",
            href: "/software/mediqm-platform",
          },
          {
            label: "MediQM Solution",
            href: "/software/mediqm-solution",
          },
        ],
      },
      {
        label: "Services",
        href: "/services",
        sublink: [
          {
            label: "Hospital Quality",
            href: "/services/hospital-quality",
          },
          {
            label: "Hospital Safety",
            href: "/services/hospital-safety",
          },
          {
            label: "Quality Management",
            href: "/services/quality-management",
          },
        ],
      },
      {
        label: "Data Analytics",
        href: "/data-analytics",
      },
      {
        label: "My MediQM",
        href: "/partners",
        sublink: [
          {
            label: "Contact",
            href: "/contact",
          },
          {
            label: "Partners",
            href: "/partners",
          },
          {
            label: "Careers",
            href: "/careers",
          },
        ],
      },
    ],
  },
});
