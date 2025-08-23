"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, ShoppingCart, Store } from "lucide-react"

const STORES = [
  {
    id: "amazon",
    label: "Buy on Amazon",
    href: "https://www.amazon.co.jp/-/en/PowerCore-Compatible-25600mAh-Supports-Delivery/dp/B089GDX7QF",
    regions: ["ALL"],
    icon: ShoppingCart,
    primary: true,
  },
  {
    id: "official",
    label: "Official Store",
    href: "https://www.anker.com/",
    regions: ["ALL"],
    icon: Store,
    primary: false,
  },
]

interface BuyButtonsProps {
  variant?: "hero" | "header" | "mobile" | "footer"
  className?: string
}

const BuyButtons = ({ variant = "hero", className = "" }: BuyButtonsProps) => {
  const handleBuyClick = (store: (typeof STORES)[0]) => {
    // Track analytics
    console.log(`[Analytics] click_buy_external:`, { storeId: store.id, variant })

    // Open in new tab
    window.open(store.href, "_blank", "noopener,noreferrer")
  }

  if (variant === "header") {
    return (
      <Button
        onClick={() => handleBuyClick(STORES[0])}
        className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-6"
      >
        Buy on Amazon
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    )
  }

  if (variant === "mobile") {
    return (
      <div className="space-y-3">
        {STORES.map((store) => {
          const Icon = store.icon
          return (
            <Button
              key={store.id}
              onClick={() => handleBuyClick(store)}
              className={`w-full justify-center ${
                store.primary
                  ? "bg-accent-blue hover:bg-accent-blue/90 text-white"
                  : "bg-charcoal hover:bg-charcoal/90 text-white"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {store.label}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {STORES.map((store) => {
        const Icon = store.icon
        return (
          <Button
            key={store.id}
            onClick={() => handleBuyClick(store)}
            size="lg"
            className={`font-semibold px-8 py-3 ${
              store.primary
                ? "bg-accent-blue hover:bg-accent-blue/90 text-white"
                : "bg-charcoal hover:bg-charcoal/90 text-white"
            }`}
          >
            <Icon className="w-5 h-5 mr-2" />
            {store.label}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        )
      })}
    </div>
  )
}

export default BuyButtons
