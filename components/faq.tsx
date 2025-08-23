"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can this charge my laptop?",
    answer:
      'Yes! The PowerCore III Elite delivers up to 87W via USB-C PD, which is sufficient to charge most laptops including MacBook Pro 16", Dell XPS, and other USB-C laptops at full speed. It can provide approximately 1.3 full charges for a typical laptop.',
  },
  {
    question: "Is it allowed on airplanes?",
    answer:
      "Absolutely. With a capacity of 93Wh, the PowerCore III Elite is well under the 100Wh limit set by most airlines for carry-on batteries. It's TSA-approved and complies with international airline regulations. We recommend keeping it in your carry-on bag.",
  },
  {
    question: "How long does it take to recharge the power bank?",
    answer:
      "The PowerCore III Elite can be fully recharged in approximately 6 hours using a 45W+ USB-C PD charger (not included). Using a standard 18W charger will take around 8-10 hours. We recommend using a high-wattage charger for fastest recharge times.",
  },
  {
    question: "What cables are included?",
    answer:
      "The package includes a 60cm USB-C to USB-C cable for charging and data transfer. For other devices, you'll need to use your existing cables or purchase additional ones. The included cable supports the full 87W power delivery.",
  },
  {
    question: "What's covered under warranty?",
    answer:
      "Our 24-month warranty covers manufacturing defects, battery degradation beyond normal wear, and charging performance issues. It includes free repair or replacement. Normal wear and tear, physical damage, or damage from misuse is not covered. Register your product online to activate warranty coverage.",
  },
  {
    question: "Which devices are compatible?",
    answer:
      "The PowerCore III Elite is compatible with virtually all USB-C and USB-A devices including MacBook (all models), iPad, iPhone, Android phones, Nintendo Switch, cameras, headphones, and more. It automatically detects your device and delivers optimal charging speed.",
  },
  {
    question: "Can I charge multiple devices at once?",
    answer:
      "Yes! You can charge up to 3 devices simultaneously using the 1× USB-C port (up to 87W) and 2× USB-A ports (up to 18W each). The intelligent power distribution ensures safe and efficient charging for all connected devices.",
  },
  {
    question: "How do I know when it needs recharging?",
    answer:
      "The PowerCore III Elite features LED indicators that show remaining battery level. Four LEDs indicate charge levels: 4 LEDs = 75-100%, 3 LEDs = 50-75%, 2 LEDs = 25-50%, 1 LED = 0-25%. The LEDs will blink when the battery is low and needs recharging.",
  },
]

const FAQ = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">Frequently asked questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about the PowerCore III Elite.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-charcoal pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </motion.div>
    </section>
  )
}

export default FAQ
