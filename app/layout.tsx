import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taskly | Gestão de tarefas e financeiro para freelancers",
  description:
    "Taskly é uma plataforma para organizar demandas, tarefas e acompanhar o financeiro de freelancers em um só lugar.",
  openGraph: {
    title: "Taskly | Gestão de tarefas e financeiro para freelancers",
    description:
      "Organize demandas, tarefas e acompanhe seu financeiro de forma simples e direta.",
    url: "https://taskly.com",
    siteName: "Taskly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taskly - gestão de tarefas e financeiro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskly | Gestão de tarefas e financeiro para freelancers",
    description:
      "Organize demandas, tarefas e acompanhe seu financeiro de forma simples e direta.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
