import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Anattoli Confeitaria — Sobremesas Artesanais Feitas com Propósito",
  description:
    "Criamos sobremesas artesanais que contam histórias e celebram os momentos mais preciosos da vida. Confeitaria artesanal no Lobito, Angola.",
  generator: "v0.app",
  metadataBase: new URL("https://anattoli.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    siteName: "Anattoli Confeitaria",
    title: "Anattoli Confeitaria — Sobremesas Artesanais Feitas com Propósito",
    description: "Onde os Sonhos se Tornam Tesouros Doces. Confeitaria artesanal no Lobito, Angola.",
    type: "website",
    url: "https://anattoli.vercel.app/",
    locale: "pt_AO",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Anattoli Confeitaria Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anattoli Confeitaria — Sobremesas Artesanais",
    description: "Onde os Sonhos se Tornam Tesouros Doces",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-AO" className={`${inter.variable} ${dancingScript.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
