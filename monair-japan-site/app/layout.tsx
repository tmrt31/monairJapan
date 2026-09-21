import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.nameShort}｜日本とモンゴルをつなぐ航空貨物・航空券・ツアー`,
    template: `%s｜${site.nameShort}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.nameShort,
    title: site.nameShort,
    description: site.description,
    images: [{ url: "/images/hero.jpg", width: 1428, height: 606 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#003030",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  alternateName: site.nameEn,
  url: SITE_URL,
  email: site.email,
  telephone: site.tel,
  faxNumber: site.fax,
  logo: `${SITE_URL}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    postalCode: "110-0016",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "台東区",
    streetAddress: "台東1丁目24-12 グランジュール秋葉原1F",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">本文へスキップ</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
