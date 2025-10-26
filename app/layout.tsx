import "@/styles/globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";

const SITE_URL = "https://bentheurich.com"; // update if needed

const title = "Ben Theurich — Software Engineer & M.Sc. Informatics @ TUM";
const description =
  "Clean systems, practical ML/CV, mapping tools. Munich-based. Projects, experience, photography, and contact.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Ben Theurich",
    images: [{ url: "/projects/streetlight-cover.jpg", width: 1200, height: 630, alt: "Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projects/streetlight-cover.jpg"],
  },
  icons: { icon: "/favicon.ico" },
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
    <html lang="en">
      <body>
        <a href="#home" className="skip-link">Skip to content</a>
        <Nav />
        <main id="content">{children}</main>
        <footer className="mt-10 border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ben Theurich — Built with Next.js + Tailwind.
          </div>
        </footer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
