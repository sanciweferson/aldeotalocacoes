import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "Aldeota Locações | Equipamentos para construção civil em Fortaleza",
    template: "%s | Aldeota Locações",
  },
  description: "Locação de equipamentos para construção civil em Fortaleza. Consulte andaimes, escoras metálicas e outras soluções para sua obra.",
  keywords: [
    "locação de equipamentos Fortaleza",
    "aluguel de andaimes Fortaleza",
    "locação de escoras metálicas Fortaleza",
    "equipamentos construção civil Fortaleza",
    "Aldeota Locações",
  ],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Aldeota Locações",
    description: "Locação de equipamentos para construção civil em Fortaleza.",
    type: "website",
    locale: "pt_BR",
  },
};

const themeScript = `
(function(){
  try {
    var saved = localStorage.getItem('aldeota-theme');
    var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = saved || (dark ? 'dark' : 'light');
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  telephone: `+${site.phoneE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.postalCode,
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Fortaleza" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
