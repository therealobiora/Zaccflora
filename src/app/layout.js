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
  title: "Zaccflora",
  description: "Natural wellness with mushrooms",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zaccflora",
    url: "https://www.zaccflora.com",
    logo: "https://www.zaccflora.com/icon.png",
  };

  return (
    <html lang="en" className={`${delius.variable} antialiased`}>
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
