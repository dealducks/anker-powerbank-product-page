"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Capacity",
    elite: "25,600mAh",
    basic: "10,000mAh",
    midTier: "20,000mAh",
  },
  {
    feature: "Max Output (W)",
    elite: "87W",
    basic: "18W",
    midTier: "45W",
  },
  {
    feature: "Ports",
    elite: "1× USB-C + 2× USB-A",
    basic: "2× USB-A",
    midTier: "1× USB-C + 1× USB-A",
  },
  {
    feature: "Laptop charging",
    elite: true,
    basic: false,
    midTier: "Limited",
  },
  {
    feature: "Recharge time",
    elite: "6 hours",
    basic: "8 hours",
    midTier: "7 hours",
  },
  {
    feature: "Weight",
    elite: "568g",
    basic: "240g",
    midTier: "420g",
  },
  {
    feature: "Price (EUR)",
    elite: "€159",
    basic: "€39",
    midTier: "€89",
  },
]

const Comparison = () => {
  const renderValue = (value: any, isElite = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      )
    }

    if (value === "Limited") {
      return <span className="text-amber-600 font-medium">Limited</span>
    }

    return <span className={isElite ? "font-semibold text-accent-blue" : "text-gray-600"}>{value}</span>
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">How it compares</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See why the PowerCore III Elite stands out from other portable chargers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 font-medium text-gray-700">Feature</th>
                <th className="text-center p-6 bg-accent-blue/5 border-l border-r border-accent-blue/20">
                  <div className="font-display text-lg font-medium text-accent-blue mb-1">PowerCore III Elite</div>
                  <div className="text-sm text-gray-600">This model</div>
                </th>
                <th className="text-center p-6 font-medium text-gray-700">
                  <div className="mb-1">Basic 10,000mAh</div>
                  <div className="text-sm text-gray-500">Entry level</div>
                </th>
                <th className="text-center p-6 font-medium text-gray-700">
                  <div className="mb-1">20,000mAh Mid-tier</div>
                  <div className="text-sm text-gray-500">Popular choice</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-6 font-medium text-gray-800">{row.feature}</td>
                  <td className="p-6 text-center bg-accent-blue/5 border-l border-r border-accent-blue/20">
                    {renderValue(row.elite, true)}
                  </td>
                  <td className="p-6 text-center">{renderValue(row.basic)}</td>
                  <td className="p-6 text-center">{renderValue(row.midTier)}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-accent-blue/5 border-t border-accent-blue/20">
          <p className="text-center text-sm text-gray-600">
            <span className="font-medium text-accent-blue">PowerCore III Elite</span> offers the best balance of
            capacity, power, and portability for professional users.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Comparison
