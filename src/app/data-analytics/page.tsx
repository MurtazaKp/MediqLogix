import React from "react";
import DataAnalytics from "../components/dataAnalytics/dataAnalytics";
import { Metadata } from "next";
import { getDataAnalyticsPage } from "../../../sanity/lib/client";
import dataAnalytics from "../../../sanity/schemaTypes/singleton/dataAnalytics";

export const metadata: Metadata = {
  title: "Data Analytics | Mediqlogix",
  description:
    "MediQlogix's SaaS-based platform provides data collection and analytics features for hospitals and healthcare organizations",
  alternates: {
    canonical: "https://mediqlogix.com/data-analytics",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    url: "https://mediqlogix.com/data-analytics",
    title: "Data Analytics | Mediqlogix",
    description:
      "MediQlogix's SaaS-based platform provides data collection and analytics features for hospitals and healthcare organizations",
    images: {
      url: "/images/seoImage.png",
      width: 800,
      height: 600,
      alt: "Mediqlogix Hospital Safety page Thumbnail",
      type: "image/png",
    },
    siteName: "MediQlogix",
  },
  twitter: {
    card: "summary_large_image",
    images: "/images/seoImage.png",
    site: "https://mediqlogix.com/services/hospital-safety",
    description:
      "MediQlogix's SaaS-based platform provides data collection and analytics features for hospitals and healthcare organizations",
  },
};

export default async function DataAnalyticsPage() {
  let dataAnalyticsPage = await getDataAnalyticsPage(
    process.env.NEXT_PUBLIC_SANITY_TOKEN
  );
  return (
    <div>
      <DataAnalytics {...dataAnalyticsPage} />
    </div>
  );
}
