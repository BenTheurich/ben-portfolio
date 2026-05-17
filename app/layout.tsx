import "@/styles/globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageProvider";

const SITE_URL = "https://bentheurich.com";

const title = "Ben Theurich — Software Engineer & M.Sc. Informatics @ TUM";
const description =
  "Production Java systems, practical ML/CV tooling, and selected projects from a Munich-based TUM Informatics master's student.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Ben Theurich",
    images: [{ url: "/profile/headshot.jpg", width: 1431, height: 1431, alt: "Portrait of Ben Theurich" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile/headshot.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ben Theurich",
    url: SITE_URL,
    sameAs: [
      "https://github.com/BenTheurich",
      "https://www.linkedin.com/in/ben-theurich/"
    ],
    affiliation: { "@type": "CollegeOrUniversity", name: "Technical University of Munich" },
    address: { "@type": "PostalAddress", addressLocality: "Munich", addressCountry: "DE" },
    jobTitle: "Software Engineer & M.Sc. Informatics student"
  };

  return (
    <html lang="en" className="dark">
      <body>
        <LanguageProvider>
          <a href="#home" className="skip-link">Skip to content</a>
          <Nav />
          <main id="content">{children}</main>
          <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </LanguageProvider>
      </body>
    </html>
  );
}
