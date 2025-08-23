"use client"

import { motion } from "framer-motion"
import { Plug, Zap, RotateCcw } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Plug,
    title: "Plug in via USB‑C PD",
    description: "Connect your devices using the included USB-C cable or your own cables.",
    detail: "Smart power detection automatically optimizes charging speed",
  },
  {
    number: "2",
    icon: Zap,
    title: "Fast charge multiple devices",
    description: "Power up to 3 devices simultaneously with intelligent power distribution.",
    detail: "MultiProtect™ safety system prevents overheating",
  },
  {
    number: "3",
    icon: RotateCcw,
    title: "Recharge the bank quickly",
    description: "Fast recharge via USB-C PD input when you're back at your desk.",
    detail: "Full recharge in approximately 6 hours",
  },
]

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">How it works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Three simple steps to power all your devices, anywhere you go.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                  <div
                      className="hidden md:block absolute top-16 left-1/2 w-[calc(100%+4rem)] h-0.5
               bg-gradient-to-r from-accent-blue to-gray-200 z-0"
                  />
              )}

              {/* Step Content */}
              <div className="relative z-10">
                {/* Step Number */}
                <div className="w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent-blue" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>

                {/* Detail */}
                <p className="text-sm font-medium text-accent-blue">{step.detail}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  )
}

export default HowItWorks
