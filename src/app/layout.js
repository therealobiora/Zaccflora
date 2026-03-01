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
  title: "MyShroomWall",
  description: "Natural wellness with mushrooms",
  verifications: {
    google: "vS1O-glZ03qI4ht4uQqAnudvFyv_ip9iSPF3nBZtdvs",
  },
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
