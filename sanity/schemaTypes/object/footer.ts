import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer ",
  type: "object",
  fields: [
    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
            }),
            defineField({
              name: "links",
              title: "Links",
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
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          type: "image",
          name: "image",
          title: "Logo",
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
          name: "email",
          title: "Email",
          type: "string",
        }),
        defineField({
          name: "address",
          title: "Address",
          type: "string",
        }),
        defineField({
          name: "phone",
          title: "Phone",
          type: "string",
        }),
        defineField({
          name: "website",
          title: "Website",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "copyRight",
      title: "Copy Right",
      type: "object",
      fields: [
        defineField({
          name: "copyrightLinks",
          title: "Copyright Links",
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
        defineField({
          name: "copyrightText",
          title: "Copyright Text",
          type: "string",
        }),
      ],
    }),
  ],
  initialValue: {
    footerLinks: [
      {
        heading: "PRODUCTS",
        links: [
          {
            label: "Cloud MediQm",
            href: "/software/cloud-mediqm",
          },
          {
            label: "MediQM Mobility",
            href: "/software/mediqm-mobility",
          },
          {
            label: "MediQM Platform",
            href: "/software/mediqm-platform",
          },
          {
            label: "MediQM Solution",
            href: "/software/mediqm-solution",
          },
        ],
      },
      {
        heading: "SERVICES",
        links: [
          {
            label: "Hospital Quality Consulting",
            href: "/services/hospital-quality",
          },
          {
            label: "Quality Management Education & Training",
            href: "/services/quality-management",
          },
          {
            label: "Hospital Safety Consulting",
            href: "/services/hospital-safety",
          },
        ],
      },
    ],
    address: {
      heading: "ADDRESS",
      logo: "/images/logo.svg",
      email: "info@Mediqlogix.com",
      address: "1st Floor,Plot #11,Shilpi Valley,Madhapur Hyderabad India",
      phone: "Phone : +91 8008552566",
      website: "http://www.mediqlogix.com",
    },
    copyRight: {
      copyrightLinks: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "Services",
          href: "/services",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
      copyrightText: "Privacy © 2024 - MediQlogix.com",
    },
  },
});
