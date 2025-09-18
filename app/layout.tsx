import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "EU Campus",
  description: "EU Campus is a digital learning platform...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className={`font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}