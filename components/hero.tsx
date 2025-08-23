"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Shield, RotateCcw, Plane, ChevronLeft, ChevronRight, X } from "lucide-react"
import BuyButtons from "@/components/buy-buttons"
import { Button } from "@/components/ui/button"
import { ImageGalleryModal } from "@/components/image-gallery-modal"

const heroImages = [
  { src: "/Anker1.png", alt: "Anker PowerCore III Elite front view" },
  { src: "/Anker2.png", alt: "Anker PowerCore III Elite ports view" },
  { src: "/Anker3.png", alt: "PowerCore charging multiple devices" },
  { src: "/Anker4.png", alt: "PowerCore in travel context" },
  { src: "/Anker5.png", alt: "PowerCore size comparison" },
  { src: "/Anker6.png", alt: "PowerCore in travel context" },
  { src: "/Anker7.png", alt: "PowerCore size comparison" },
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openGallery = () => setIsGalleryOpen(true)
  const closeGallery = () => setIsGalleryOpen(false)

  const goTo = useCallback((i: number) => {
    const idx = (i + heroImages.length) % heroImages.length
    setCurrentImage(idx)
    console.log("[Analytics] select_pdp_media:", { slideIndex: idx })
  }, [])

  const next = useCallback(() => goTo(currentImage + 1), [currentImage, goTo])
  const prev = useCallback(() => goTo(currentImage - 1), [currentImage, goTo])

  // Навигация стрелками в модалке
  useEffect(() => {
    if (!isGalleryOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "Escape") closeGallery()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isGalleryOpen, next, prev])

  const handleSpecsClick = () => {
    document.querySelector("#specs")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-10">
          {/* Product Images - Left Column */}
          <div className="lg:col-span-7 mb-8 lg:mb-0">
            <div
                className="relative rounded-2xl bg-white border border-gray-200 p-4 aspect-[4/3] lg:max-h-[78vh] overflow-hidden shadow-lg cursor-zoom-in"
                onClick={openGallery}
                aria-label="Open gallery"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openGallery()}
            >
              <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
              >
                <Image
                    src={heroImages[currentImage].src || "/placeholder.svg"}
                    alt={heroImages[currentImage].alt}
                    fill
                    className="object-contain select-none"
                    priority={currentImage === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Thumbnails (mobile-friendly) */}
            <div
                className="mt-4 flex items-center gap-3 overflow-x-auto
             -mx-2 px-2 sm:mx-0 sm:px-0
             snap-x snap-mandatory"
                aria-label="Product image thumbnails"
            >
              {heroImages.map((img, index) => {
                const active = index === currentImage
                return (
                    <button
                        key={img.src}
                        onClick={() => goTo(index)}
                        className={[
                          "relative flex-shrink-0 rounded-xl border transition-all focus:outline-none",
                          "snap-start",
                          // размеры: крупнее на мобилке для тачей, компактнее на десктопе
                          "w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20",
                          active
                              ? "border-accent-blue ring-2 ring-accent-blue"
                              : "border-gray-200 hover:border-gray-300 focus:ring-2 focus:ring-accent-blue",
                        ].join(" ")}
                        aria-label={`Show image ${index + 1}`}
                        aria-current={active ? "true" : "false"}
                    >
                      <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover rounded-xl"
                          sizes="(max-width: 640px) 80px, 80px"
                      />
                    </button>
                )
              })}
            </div>
          </div>

          {/* Product Info - Right Column */}
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              {/* Micro-badges */}
              <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue">
                <Plane className="w-3 h-3 mr-1" />
                Ships worldwide
              </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Works with MacBook, iPad, iPhone, Android
              </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl lg:text-5xl font-normal text-charcoal mb-4 leading-tight">
                Anker PowerCore III Elite 25600 87W Black
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                25600mAh. Up to 87W USB‑C PD. Charge a laptop, phone, and tablet at once.
              </p>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent-amber text-accent-amber" />
                    ))}
                  </div>
                  <span className="ml-2 font-medium">4.8/5</span>
                  <span className="ml-1 text-gray-500">(2,100+ reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>24‑month warranty</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <RotateCcw className="w-4 h-4 mr-1" />
                  <button className="hover:text-accent-blue transition-colors">Free returns</button>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2 mb-8">
                {[
                  "Charge a laptop with USB‑C PD up to 87W",
                  "Up to 5–6 phone charges",
                  "Airline‑friendly capacity",
                ].map((t) => (
                    <div key={t} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-accent-blue rounded-full mr-3" />
                      <span>{t}</span>
                    </div>
                ))}
              </div>

              {/* Buy Buttons */}
              <BuyButtons variant="hero" className="mb-6" />

              {/* Secondary Link */}
              <Button
                  variant="ghost"
                  onClick={handleSpecsClick}
                  className="text-accent-blue hover:text-accent-blue/80 p-0 h-auto font-medium"
              >
                See full specs ↓
              </Button>

              {/* Trust Microcopy */}
              <p className="text-sm text-gray-500 mt-6">Trusted by millions of users worldwide.</p>
            </motion.div>
          </div>
        </div>

        {/* Gallery Modal */}
        {/* Gallery Modal (improved) */}
        <ImageGalleryModal
            key={currentImage}                 // гарантирует корректный initialIndex при новом открытии
            images={heroImages}
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
            initialIndex={currentImage}
        />
      </section>
  )
}

export default Hero
