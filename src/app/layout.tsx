import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://padillasprestigedfw.com";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Padilla Prestige Remodeling | Bathroom Remodeling Dallas–Fort Worth",
    template: "%s | Padilla Prestige Remodeling",
  },
  description:
    "Padilla Prestige Remodeling offers expert bathroom remodels, tile installation, and complete shower systems in the Dallas–Fort Worth area. 10+ years of experience. Free in-home consultation. Call (214) 810-5012.",
  keywords: [
    "bathroom remodeling Dallas",
    "bathroom remodel DFW",
    "tile installation Dallas",
    "shower remodel Dallas TX",
    "accessible bathroom Dallas",
    "Padilla Prestige Remodeling",
    "bathroom contractor Dallas Fort Worth",
  ],
  authors: [{ name: "José Padilla", url: BASE_URL }],
  creator: "Padilla Prestige Remodeling LLC",
  publisher: "Padilla Prestige Remodeling LLC",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Padilla Prestige Remodeling",
    title: "Padilla Prestige Remodeling | Bathroom Remodeling Dallas–Fort Worth",
    description:
      "Expert bathroom remodels, tile installation, and shower systems in Dallas–Fort Worth. 10+ years of experience. Free in-home consultation.",
    images: [
      {
        url: "/images/logo-padilla.png",
        width: 800,
        height: 800,
        alt: "Padilla Prestige Remodeling Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padilla Prestige Remodeling | Bathroom Remodeling Dallas–Fort Worth",
    description:
      "Expert bathroom remodels in Dallas–Fort Worth. Free in-home consultation. Call (214) 810-5012.",
    images: ["/images/logo-padilla.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
