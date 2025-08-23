"use client"

import { motion } from "framer-motion"
import { Zap, Battery, Usb, Plane } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Laptop-class USB‑C PD (up to 87W)",
    description: "Fast charge MacBooks, laptops, and tablets with industry-leading power delivery technology.",
    proof: '87W = MacBook Pro 16" full speed charging',
  },
  {
    icon: Battery,
    title: "Huge capacity 25,600mAh",
    description: "Up to 1.3× laptop charges or 5–6× phone charges. Power through your longest days.",
    proof: "93Wh capacity = maximum airline allowance",
  },
  {
    icon: Usb,
    title: "Multi‑device charging",
    description: "Charge up to 3 devices simultaneously with 1× USB‑C PD and 2× USB‑A ports.",
    proof: "Smart power distribution prevents overheating",
  },
  {
    icon: Plane,
    title: "Compact & flight‑ready",
    description: "TSA-approved capacity that complies with airline battery regulations worldwide.",
    proof: "Under 100Wh limit for carry-on approval",
  },
]

const Benefits = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">
          Power that keeps up with you
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Engineered for professionals who demand reliable, fast charging wherever work takes them.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-accent-blue" />
              </div>

              <h3 className="font-display text-xl font-medium text-charcoal mb-3">{benefit.title}</h3>

              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>

              <p className="text-sm font-medium text-accent-blue">{benefit.proof}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Benefits
