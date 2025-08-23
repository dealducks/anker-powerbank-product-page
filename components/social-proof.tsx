"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const pressLogos = [
  { name: "TechCrunch", src: "/techcrunch-logo.png" },
  { name: "The Verge", src: "/the-verge-logo.png" },
  { name: "Wired", src: "/wired-magazine-logo.png" },
  { name: "Engadget", src: "/engadget-logo.png" },
  { name: "PCMag", src: "/pcmag-logo.png" },
]

const quotes = [
  {
    text: "The best portable charger we've tested",
    source: "TechCrunch",
  },
  {
    text: "Essential for digital nomads",
    source: "The Verge",
  },
]

const ugcImages = [
  { src: "/exp-image1.jpg", alt: "Coffee shop charging" },
  { src: "/exp-image2.jpg", alt: "Airplane travel" },
  { src: "/exp-image3.jpg", alt: "Desk setup" },
  { src: "/exp-image4.jpg", alt: "Backpack storage" },
  { src: "/exp-image5.jpg", alt: "Outdoor charging" },
  { src: "/exp-image6.jpg", alt: "Size comparison" },
]

const ratingDistribution = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 16 },
  { stars: 3, percentage: 4 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

const SocialProof = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Press Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-medium text-gray-500 mb-8 uppercase tracking-wide">Featured in</p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {pressLogos.map((logo) => (
            <div key={logo.name} className="h-8">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {quotes.map((quote, index) => (
          <motion.div
            key={quote.source}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <blockquote className="text-lg font-medium text-charcoal mb-4">"{quote.text}"</blockquote>
            <cite className="text-sm text-gray-500 font-medium">— {quote.source}</cite>
          </motion.div>
        ))}
      </div>

      {/* UGC Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="font-display text-2xl font-normal text-charcoal text-center mb-8">
          Real users, real experiences
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ugcImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Rating Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent-amber text-accent-amber" />
            ))}
          </div>
          <p className="text-3xl font-bold text-charcoal">4.8 out of 5</p>
          <p className="text-gray-600">Based on 2,100+ reviews</p>
        </div>

        <div className="space-y-3">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-4">
              <div className="flex items-center gap-1 w-16">
                <span className="text-sm font-medium">{rating.stars}</span>
                <Star className="w-3 h-3 fill-accent-amber text-accent-amber" />
              </div>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-accent-amber h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${rating.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-600 w-12 text-right">{rating.percentage}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SocialProof
