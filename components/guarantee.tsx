"use client"

import { motion } from "framer-motion"
import { Shield, RotateCcw, Truck, Clock } from "lucide-react"

const guarantees = [
  {
    icon: Shield,
    title: "24-month warranty",
    description: "Comprehensive coverage against manufacturing defects and performance issues.",
    detail: "Industry-leading protection",
  },
  {
    icon: RotateCcw,
    title: "30-day returns",
    description: "Not satisfied? Return within 30 days for a full refund, no questions asked.",
    detail: "Hassle-free returns",
  },
  {
    icon: Truck,
    title: "Free EU shipping",
    description: "Free shipping on orders €75+ across all European Union countries.",
    detail: "Orders ship within 24 hours",
  },
  {
    icon: Clock,
    title: "Fast delivery",
    description: "Express delivery options available. Track your order every step of the way.",
    detail: "2-3 business days",
  },
]

const deliveryBadges = [
  { region: "EU", eta: "2-3 days", price: "Free over €75" },
  { region: "UK", eta: "3-5 days", price: "€9.99" },
  { region: "US", eta: "5-7 days", price: "€14.99" },
  { region: "Global", eta: "7-14 days", price: "€19.99" },
]

const Guarantee = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">Your purchase is protected</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Buy with confidence knowing you're covered by our comprehensive guarantees.
        </p>
      </motion.div>

      {/* Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {guarantees.map((guarantee, index) => {
          const Icon = guarantee.icon
          return (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-accent-blue" />
              </div>

              <h3 className="font-display text-lg font-medium text-charcoal mb-2">{guarantee.title}</h3>

              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{guarantee.description}</p>

              <p className="text-xs font-medium text-accent-blue">{guarantee.detail}</p>
            </motion.div>
          )
        })}
      </div>

      {/* Delivery Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
      >
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-medium text-charcoal mb-2">Worldwide shipping</h3>
          <p className="text-gray-600">Fast, reliable delivery to your door</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryBadges.map((badge, index) => (
            <motion.div
              key={badge.region}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-4 text-center"
            >
              <div className="font-semibold text-charcoal mb-1">{badge.region}</div>
              <div className="text-sm text-gray-600 mb-1">{badge.eta}</div>
              <div className="text-xs font-medium text-accent-blue">{badge.price}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-accent-blue/5 rounded-xl text-center">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Order tracking:</span> Receive real-time updates via email and SMS
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Guarantee
