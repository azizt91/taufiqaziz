import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taufiq Aziz - Portfolio | Project Controller & Network Administrator",
  description:
    "Profesional di bidang telekomunikasi, jaringan FTTH, pengendalian proyek, administrasi jaringan dan pengembangan web dengan pengalaman lebih dari 12 tahun.",
  keywords: [
    "Taufiq Aziz",
    "Network Administrator",
    "Project Controller",
    "Web Developer",
    "Laravel",
    "MikroTik",
    "FTTH",
  ],
  authors: [{ name: "Taufiq Aziz" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Taufiq Aziz - Portfolio",
    description: "Project Controller Region | Network Administrator | Web Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
