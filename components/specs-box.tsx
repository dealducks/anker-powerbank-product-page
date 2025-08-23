"use client"

import { motion } from "framer-motion"
import { Package, Zap, Shield, Smartphone, Laptop } from "lucide-react"

const specs = [
  { label: "Capacity", value: "25,600mAh, 93Wh (airline compliant)" },
  { label: "USB-C Output", value: "PD 3.0 up to 87W" },
  { label: "USB-A Output", value: "2× ports, up to 18W each" },
  { label: "Input", value: "USB-C PD fast recharge" },
  { label: "Dimensions", value: "180 × 82 × 24mm" },
  { label: "Weight", value: "568g" },
  { label: "Safety", value: "MultiProtect™, temperature control" },
  { label: "Compatibility", value: "MacBook, iPad, iPhone, Android, Switch, earbuds" },
]

const boxContents = [
  "PowerCore III Elite 25600mAh",
  "USB-C to USB-C cable (60cm)",
  "Travel pouch",
  "Quick start guide",
  "Welcome guide",
]

const compatibleDevices = [
  { icon: Laptop, name: "MacBook Pro/Air", detail: "Up to 1.3× charges" },
  { icon: Smartphone, name: "iPhone/Android", detail: "5-6× charges" },
  { icon: Smartphone, name: "iPad/Tablets", detail: "2-3× charges" },
  { icon: Zap, name: "Nintendo Switch", detail: "4-5× charges" },
]

const SpecsBox = () => {

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">Technical specifications</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Engineered for performance, built for reliability.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <Zap className="w-6 h-6 text-accent-blue mr-3" />
              <h3 className="font-display text-xl font-medium text-charcoal">Power Specifications</h3>
            </div>

            <div className="space-y-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-700 flex-shrink-0 mr-4">{spec.label}</span>
                  <span className="text-gray-600 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What's in the Box & Compatibility */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* What's in the Box */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <Package className="w-6 h-6 text-accent-blue mr-3" />
              <h3 className="font-display text-xl font-medium text-charcoal">What's in the box</h3>
            </div>

            <ul className="space-y-3">
              {boxContents.map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Device Compatibility */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <Shield className="w-6 h-6 text-accent-blue mr-3" />
              <h3 className="font-display text-xl font-medium text-charcoal">Device compatibility</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {compatibleDevices.map((device) => {
                const Icon = device.icon
                return (
                  <div key={device.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Icon className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{device.name}</p>
                      <p className="text-xs text-gray-600">{device.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecsBox
