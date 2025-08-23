"use client"

import { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import SocialProof from "@/components/social-proof"
import SpecsBox from "@/components/specs-box"
import HowItWorks from "@/components/how-it-works"
import Comparison from "@/components/comparison"
import Guarantee from "@/components/guarantee"
import Reviews from "@/components/reviews"
import FAQ from "@/components/faq"
import FooterCTA from "@/components/footer-cta"

// Analytics helper functions
const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  // Mock DataLayer push
  if (typeof window !== "undefined") {
    console.log(`[Analytics] ${eventName}:`, parameters)
    // In production: window.dataLayer?.push({ event: eventName, ...parameters })
  }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    // Track page view
    trackEvent("view_item", {
      item_name: "Anker PowerCore III Elite 25600mAh (87W)",
      item_id: "ANK-PCE-25600-87W",
      item_category: "Power Banks",
      item_brand: "Anker",
      price: 159.0,
      currency: "EUR",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Parallax background */}
      <motion.div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-soft-gray via-white to-soft-gray opacity-50"
        style={{ y }}
      />

      <Header />

      <main>
        <section id="overview">
          <Hero />
        </section>

        <section className="py-12 lg:py-20">
          <Benefits />
        </section>

        <section className="py-12 lg:py-20 bg-soft-gray">
          <SocialProof />
        </section>

        <section id="specs" className="py-12 lg:py-20">
          <SpecsBox />
        </section>

        <section className="py-12 lg:py-20 bg-soft-gray">
          <HowItWorks />
        </section>

        <section className="py-12 lg:py-20">
          <Comparison />
        </section>

        <section className="py-12 lg:py-20 bg-soft-gray">
          <Guarantee />
        </section>

        <section id="reviews" className="py-12 lg:py-20">
          <Reviews />
        </section>

        <section id="faq" className="py-12 lg:py-20 bg-soft-gray">
          <FAQ />
        </section>

        <FooterCTA />
      </main>
    </div>
  )
}
