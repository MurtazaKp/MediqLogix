import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

import {
  aboutUsPageQuery,
  dataAnalyticsPageQuery,
  homePageQuery,
  mediqmPageQuery,
  servicesPageQuery,
  settingQuery,
  softwarePageQuery,
} from "./sanity.queries";

const sanityClient = (token: any) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null;
};

export async function getHomePage({ token }: any) {
  return await sanityClient(token)?.fetch(homePageQuery);
}

export async function getServicesPage({ token }: any) {
  return await sanityClient(token)?.fetch(servicesPageQuery);
}

export async function getDataAnalyticsPage({ token }: any) {
  return await sanityClient(token)?.fetch(dataAnalyticsPageQuery);
}

export async function getAboutUsPage({ token }: any) {
  return await sanityClient(token)?.fetch(aboutUsPageQuery);
}

export async function getSoftwareProductPage({ token }: any) {
  return await sanityClient(token)?.fetch(softwarePageQuery);
}

export async function getSetting({ token }: any) {
  return await sanityClient(token)?.fetch(settingQuery);
}

export async function getMediqmPage({ token }: any) {
  return await sanityClient(token)?.fetch(mediqmPageQuery);
}
