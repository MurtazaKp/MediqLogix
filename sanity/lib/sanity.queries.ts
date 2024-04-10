import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "homePage"][0]{
   heroSection,
  welcomeSection,
   productServicesGrid,
     benefitsSection
 }
`;

export const servicesPageQuery = groq`
 *[_type == "servicePage"][0]{
   services,
   hospitalQuality,
   qualityManagement,
   hospitalSafety,
 }
`;

export const dataAnalyticsPageQuery = groq`
  *[_type == "dataAnalytics"][0]{
   heading,
   dataAnalytics
 }
`;

export const aboutUsPageQuery = groq`
 *[_type == "aboutUs"][0]{
   corporateGovernance,
   companyProfile,
     aboutUs,
     visionMission
 }
`;

export const softwarePageQuery = groq`
  *[_type == "softwareProduct"][0]{
   mediqmMobility,
     software,
     mediqmSolution,
     mediqmPlatform,
     cloudMediqm
     
 }
`;

export const settingQuery = groq`
   *[_type == "settings"][0]{
   headerMenus,
     Footer,
     logo
 }
`;

export const mediqmPageQuery = groq`
    *[_type == "mediqmPage"][0]{
   career,
     contact,
     partners
 }
`;

export const teamPageQuery = groq`
 *[_type == "teamPage"][0]{
   teamMembers[]->{
     teamDetails,
     teamMember->{
      role,
      degree,
      name,
      imageSrc
    }
   }
 }
`;
