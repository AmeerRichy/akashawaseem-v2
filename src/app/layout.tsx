import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Quicksand,
  Poppins,
  Laila,
  Poiret_One,
} from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// ✅ New font additions
const laila = Laila({
  variable: "--font-laila",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poiret = Poiret_One({
  variable: "--font-poiret",
  subsets: ["latin"],
  weight: ["400"],
});

// ✅ Metadata with multiple favicon fallbacks
export const metadata: Metadata = {
  title: "Akasha Waseem",
  description:
    "Personal Portfolio of Akasha Waseem — Web Developer & Designer",
  icons: {
    icon: "/assets/images/Akasha-Icon.png",
    shortcut: "/assets/images/Akasha-Icon.png",
    apple: "/assets/images/Akasha-Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${playfair.variable}
        ${quicksand.variable}
        ${poppins.variable}
        ${laila.variable}
        ${poiret.variable}
      `}
    >
      <head>
        <link
          rel="icon"
          href="/assets/images/Akasha-Icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
