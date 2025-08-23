"use client"

import { motion } from "framer-motion"
import BuyButtons from "@/components/buy-buttons"
import Image from "next/image";

const FooterCTA = () => {
  const handleFooterCTAClick = () => {
    console.log("[Analytics] cta_footer_click")
  }

  return (
    <section className="bg-charcoal text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-normal mb-6">Power your day, anywhere.</h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join millions of professionals who trust Anker for reliable, fast charging. Ready when you are.
          </p>

          <div onClick={handleFooterCTAClick}>
            <BuyButtons variant="footer" className="justify-center" />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-2">
                <Image src="/anker-logo.png" alt="EcoCharge Logo" width={64} height={32} />
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <button className="hover:text-white transition-colors">Terms of Service</button>
                <button className="hover:text-white transition-colors">Support</button>
                <button className="hover:text-white transition-colors">Contact</button>
              </div>
              <div className="flex flex-col items-end space-x-2">
                <p className="text-sm text-gray-400 m-0">© 2024 Anker. All rights reserved.</p>
                <p className="text-sm text-gray-400">Created by Futurio.</p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FooterCTA
