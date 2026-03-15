import { Delius } from "next/font/google";
import "./globals.css";

const delius = Delius({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-delius",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.zaccflora.com"),

  title: "Zaccflora | Natural Psychedelic Wellness",

  description:
    "Zaccflora offers natural psychedelic wellness products crafted to support clarity, and healthy living.",

  alternates: {
    canonical: "https://www.zaccflora.com",
  },

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Zaccflora | Natural Psychedelic Wellness",
    description:
      "Zaccflora offers natural psychedelic wellness products crafted to support clarity, and conscious living.",
    url: "https://www.zaccflora.com",
    siteName: "Zaccflora",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "zaccflora",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaccflora | Natural Psychedelic Wellness",
    description:
      "Zaccflora offers natural psychedelic wellness products crafted to support clarity, and healthy living.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Zaccflora",
        url: "https://www.zaccflora.com",
        logo: "https://www.zaccflora.com/icon.png",
      },
      {
        "@type": "WebSite",
        name: "Zaccflora",
        url: "https://www.zaccflora.com",
      },
    ],
  };

  return (
    <html lang="en-US" className={`${delius.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body className="bg-white">{children}</body>
    </html>
  );
}
