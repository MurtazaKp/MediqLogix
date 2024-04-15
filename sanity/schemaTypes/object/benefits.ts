// featureSchema.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuresSection",
  title: "Features Section",
  type: "object",
  fields: [
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
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
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  initialValue: {
    mainHeading: "Main Features",
    features: [
      {
        heading: "Healthcare Quality",
        description:
          "At MediQlogix, we believe AI-powered data tools organize information to enhance the quality and safety standards of healthcare organizations.",
        icon: "quality",
        knowMoreCta: {
          label: "Know More",
          href: "#",
        },
      },
      {
        heading: "Financial Benefit",
        description:
          "MediQlogix’s team believes in the excellence of quality and patient safety to increase hospitals’ profitability. ",
        icon: "financial",
        knowMoreCta: {
          label: "Know More",
          href: "#",
        },
      },
      {
        heading: "Data Analytics",
        description:
          "MediQlogix provides big data and data analytics to improve health safety, profit margin, and customer satisfaction of healthcare organizations. ",
        icon: "data",
        knowMoreCta: {
          label: "Know More",
          href: "#",
        },
      },
      {
        heading: "AI-powered Technology ",
        description:
          "MediQlogix provides an AI-powered cloud-based platform to hospitals and healthcare organizations.",
        icon: "cloud",
        knowMoreCta: {
          label: "Know More",
          href: "#",
        },
      },
    ],
  },
});
