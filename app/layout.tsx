import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: "400",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000"

export const metadata: Metadata = {
  // ✅ фиксит warning: делает относительные OG/Twitter изображения абсолютными
  metadataBase: new URL(SITE_URL),

  title: "Anker PowerCore III Elite 25600mAh (87W) - Fast Power, Wherever You Go",
  description:
      "25600mAh portable charger with 87W USB-C PD. Charge laptops, phones, and tablets simultaneously. Airline-friendly capacity with 24-month warranty.",
  generator: "v0.app",
  keywords:
      "Anker, PowerCore, portable charger, power bank, USB-C PD, 87W, 25600mAh, laptop charging",

  // ❗ было type: "product" → меняем на поддерживаемое значение
  openGraph: {
    type: "website",
    url: "/",
    title: "Anker PowerCore III Elite 25600mAh (87W)",
    description:
        "Fast power, wherever you go. 25600mAh capacity with 87W USB-C PD charging.",
    images: [
      {
        url: "/img/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Anker PowerCore III Elite 25600mAh (87W) portable charger",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anker PowerCore III Elite 25600mAh (87W)",
    description:
        "Fast power, wherever you go. 25600mAh capacity with 87W USB-C PD charging.",
    images: ["/img/hero1.jpg"], // c metadataBase станет абсолютным
  },

  // можно оставить строкой, но объект точнее
  robots: {
    index: true,
    follow: true,
  },

  // опционально: чтобы не дублировать <link rel="canonical"> вручную
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Если используешь alternates.canonical выше — этот link можно убрать */}
        {/* <link rel="canonical" href={`${SITE_URL}`} /> */}
        <script
            type="application/ld+json"
            // ✅ Product разметка остаётся — это именно для поисковиков
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Anker PowerCore III Elite 25600mAh (87W)",
                image: [
                  `${SITE_URL}/img/hero1.jpg`,
                  `${SITE_URL}/img/hero2.jpg`,
                  `${SITE_URL}/img/hero3.jpg`,
                  `${SITE_URL}/img/hero4.jpg`,
                  `${SITE_URL}/img/hero5.jpg`,
                ],
                description:
                    "Premium portable charger with 25600mAh capacity and 87W USB-C PD for fast laptop, phone, and tablet charging",
                sku: "ANK-PCE-25600-87W",
                brand: { "@type": "Brand", name: "Anker" },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: "159.00",
                  availability: "https://schema.org/InStock",
                  url: SITE_URL, // опционально
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "2100",
                },
              }),
            }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
      </html>
  )
}
