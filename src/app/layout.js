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
  return (
    <html lang="en" className={`${delius.variable} antialiased`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
