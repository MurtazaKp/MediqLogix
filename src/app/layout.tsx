import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { GoogleAnalyticsTracking } from "./components/googleAnalytics.tsx/googleAnalytics";

import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

// const schemaData = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   image: "https://www.example.com/example_image.jpg",
//   url: "https://www.example.com",
//   sameAs: [
//     "https://example.net/profile/example1234",
//     "https://example.org/example1234",
//   ],
//   logo: "https://www.example.com/images/logo.png",
//   name: "Example Corporation",
//   description:
//     "The example corporation is well-known for producing high-quality widgets",
//   email: "contact@example.com",
//   telephone: "+47-99-999-9999",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "Rue Improbable 99",
//     addressLocality: "Paris",
//     addressCountry: "FR",
//     addressRegion: "Ile-de-France",
//     postalCode: "75001",
//   },
//   vatID: "FR12345678901",
//   iso6523Code: "0199:724500PMK2A2M1SQQ228",
// };
export const metadata: Metadata = {
  icons: {
    icon: "/images/Favicon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "image": "https://www.example.com/example_image.jpg",
      "url": "https://www.example.com",
      "sameAs": ["https://example.net/profile/example1234", "https://example.org/example1234"],
      "logo": "https://www.example.com/images/logo.png",
      "name": "Example Corporation",
      "description": "The example corporation is well-known for producing high-quality widgets",
      "email": "contact@example.com",
      "telephone": "+47-99-999-9999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rue Improbable 99",
        "addressLocality": "Paris",
        "addressCountry": "FR",
        "addressRegion": "Ile-de-France",
        "postalCode": "75001"
      },
      "vatID": "FR12345678901",
      "iso6523Code": "0199:724500PMK2A2M1SQQ228"
    }`,
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.example.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://query.example.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }`,
          }}
        ></script>
      </head>
      {/* <Head>
        <script
          id="my-seo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        ></script>
      </Head> */}

      <body className={inter.className}>
        <GoogleAnalytics gaId="G-1QQFW51GEL" />
        <Header />
        <Suspense>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
