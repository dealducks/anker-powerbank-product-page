"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Star, Filter, Camera, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/* ---------- Тип и мок-данные ---------- */
type Review = {
  id: number
  name: string
  avatar: string
  rating: 1 | 2 | 3 | 4 | 5
  dateISO: string        // для сортировки
  dateLabel: string      // человекочитаемая метка
  device: string
  verified: boolean
  helpful: number
  review: string
  hasPhotos: boolean
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-08-15",
    dateLabel: "2 weeks ago",
    device: 'MacBook Pro 14"',
    verified: true,
    helpful: 24,
    review:
        "This power bank is a game-changer for my work trips. Charges my MacBook Pro from 20% to 80% and still has juice left for my phone. The build quality feels premium and it fits perfectly in my laptop bag.",
    hasPhotos: true,
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-07-28",
    dateLabel: "1 month ago",
    device: "iPad Pro + iPhone",
    verified: true,
    helpful: 18,
    review:
        "Perfect for digital nomads. I can charge my iPad Pro and iPhone simultaneously while working from cafes. The 87W output is no joke - charges as fast as the original Apple charger.",
    hasPhotos: false,
  },
  {
    id: 3,
    name: "Emma Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    dateISO: "2025-08-08",
    dateLabel: "3 weeks ago",
    device: "Dell XPS 13",
    verified: true,
    helpful: 12,
    review:
        "Great capacity and fast charging. Only minor complaint is the weight, but that's expected with this much power. TSA had no issues with it on my last 3 flights.",
    hasPhotos: true,
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-08-18",
    dateLabel: "1 week ago",
    device: "Multiple devices",
    verified: true,
    helpful: 31,
    review:
        "As a photographer, I need reliable power for my camera, laptop, and phone during long shoots. This power bank handles everything beautifully. The multiple ports are a lifesaver.",
    hasPhotos: true,
  },
  {
    id: 5,
    name: "Julia Novak",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    dateISO: "2025-07-20",
    dateLabel: "1 month ago",
    device: "Lenovo Yoga",
    verified: false,
    helpful: 7,
    review:
        "Solid performance and the pouch is handy. Would love a slightly lighter version, but charging speeds are excellent.",
    hasPhotos: false,
  },
  {
    id: 6,
    name: "Tomáš Kováč",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-08-21",
    dateLabel: "2 days ago",
    device: "MacBook Air M2",
    verified: true,
    helpful: 5,
    review:
        "Charges my MBA at full speed and still keeps my phone topped up during travel. Airline-friendly capacity is a big plus.",
    hasPhotos: false,
  },
  {
    id: 7,
    name: "Olivia Park",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-06-30",
    dateLabel: "2 months ago",
    device: "Nintendo Switch + Pixel",
    verified: true,
    helpful: 19,
    review:
        "Weekend trips are sorted. Switch + phone at the same time, no problem. PD output rocks!",
    hasPhotos: true,
  },
  {
    id: 8,
    name: "Liam Wright",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    dateISO: "2025-08-10",
    dateLabel: "3 weeks ago",
    device: "Surface Laptop",
    verified: false,
    helpful: 3,
    review:
        "Does what it says. Would appreciate more color options, but black looks premium.",
    hasPhotos: false,
  },
  {
    id: 9,
    name: "Ava Martins",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-08-05",
    dateLabel: "3 weeks ago",
    device: "iPhone 15 Pro",
    verified: true,
    helpful: 11,
    review:
        "Emergency power for my shoots. Love the quick top-ups and the USB‑C cable included.",
    hasPhotos: true,
  },
  {
    id: 10,
    name: "Noah Fischer",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    dateISO: "2025-07-10",
    dateLabel: "6 weeks ago",
    device: "MacBook Pro 13”",
    verified: true,
    helpful: 9,
    review:
        "87W PD is a beast. Recharges the bank itself quickly too. Recommended.",
    hasPhotos: false,
  },
]

/* ---------- Опции фильтров ---------- */
const filterOptions = [
  { label: "Most recent", value: "recent" },
  { label: "Most helpful", value: "helpful" },
  { label: "With photos", value: "photos" },
  { label: "5 stars", value: "5star" },
  { label: "4 stars", value: "4star" },
] as const
type FilterValue = (typeof filterOptions)[number]["value"]

const Reviews = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("recent")

  /* ---------- Фильтрация/сортировка и ограничение 4 карточками ---------- */
  const visibleReviews = useMemo(() => {
    let list = [...reviews]

    // 1) Фильтруем по условию
    switch (activeFilter) {
      case "photos":
        list = list.filter((r) => r.hasPhotos)
        break
      case "5star":
        list = list.filter((r) => r.rating === 5)
        break
      case "4star":
        list = list.filter((r) => r.rating === 4)
        break
      default:
        // "recent" | "helpful" — не фильтруем, только сортируем
        break
    }

    // 2) Сортируем
    if (activeFilter === "helpful") {
      list.sort((a, b) => b.helpful - a.helpful) // по полезности
    } else {
      list.sort(
          (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
      ) // по дате по убыванию
    }

    // 3) Ограничиваем максимум 4 карточками
    return list.slice(0, 4)
  }, [activeFilter])

  const handleAddReview = () => {
    // Демонстрация — форма не реализована
    alert("Demo only: Review form would be processed here")
  }

  return (
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок + рейтинг */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-normal text-charcoal mb-4">
            What customers say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-amber text-accent-amber" />
              ))}
            </div>
            <span className="text-2xl font-bold text-charcoal">4.8</span>
            <span className="text-gray-600">• 2,100+ reviews</span>
          </div>
        </motion.div>

        {/* Фильтры */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
                <Button
                    key={filter.value}
                    variant={activeFilter === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter.value)}
                    className={
                      activeFilter === filter.value
                          ? "bg-accent-blue hover:bg-accent-blue/90"
                          : ""
                    }
                    aria-pressed={activeFilter === filter.value}
                >
                  <Filter className="w-3 h-3 mr-1" />
                  {filter.label}
                </Button>
            ))}
          </div>

          <Button onClick={handleAddReview} variant="outline" size="sm">
            Add review
          </Button>
        </motion.div>

        {/* Сетка отзывов — показываем только visibleReviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visibleReviews.map((review, index) => (
              <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                {/* Шапка отзыва */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-charcoal">{review.name}</h4>
                        {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.device}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                          <Star
                              key={i}
                              className={`w-4 h-4 ${
                                  i < review.rating
                                      ? "fill-accent-amber text-accent-amber"
                                      : "text-gray-300"
                              }`}
                          />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.dateLabel}</p>
                  </div>
                </div>

                {/* Текст отзыва */}
                <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                {/* Подвал отзыва */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {review.hasPhotos && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Camera className="w-4 h-4 mr-1" />
                          <span>Has photos</span>
                        </div>
                    )}
                  </div>

                  <button
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-accent-blue transition-colors"
                      onClick={() => {
                        // Демонстрация — инкремент полезности не сохраняется
                        console.log("[Analytics] review_helpful_click", { reviewId: review.id })
                        alert("Thanks! (demo)")
                      }}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </motion.div>
          ))}
        </div>

        {/* Кнопка "Load more" оставляем как внешнюю ссылку (по ТЗ показываем максимум 4) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
        >
          <a
              href="https://www.amazon.co.jp/-/en/PowerCore-Compatible-25600mAh-Supports-Delivery/dp/B089GDX7QF"
              target="_blank"
              rel="nofollow noopener"
          >
            <Button
                variant="outline"
                size="lg"
                className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white bg-transparent"
            >
              Load more reviews
            </Button>
          </a>
        </motion.div>
      </section>
  )
}

export default Reviews
