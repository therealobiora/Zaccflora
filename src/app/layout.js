import { Poppins, Montserrat, Nunito_Sans, Delius } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-poppins",
//   display: "swap",
// });

// const nunitoSans = Nunito_Sans({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-nunito-sans",
//   display: "swap",
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-montserrat",
//   display: "swap",
// });

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${delius.variable} antialiased`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
