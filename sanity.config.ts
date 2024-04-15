/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    vercelDeployTool(),
    simplerColorInput({
      defaultColorFormat: "hex",
      enableSearch: true,
      defaultColorList: [
        { label: "primary-green", value: "#4ef721" },
        { label: "primary-blue", value: "#4387EA" },
        { label: "primary-black", value: "#333333" },
        { label: "secondary-black", value: "#000000" },
        { label: "secondary-green", value: "#43ac25" },
        { label: "custom...", value: "custom" },
      ],
    }),

    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
