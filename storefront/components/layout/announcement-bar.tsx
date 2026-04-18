'use client'

import { useState, useEffect } from 'react'
import { X, Scissors, Truck, ShieldCheck } from 'lucide-react'

const MESSAGES = [
  { icon: Scissors, text: 'Complimentary stitching on every order — no hidden charges' },
  { icon: Truck, text: 'Free nationwide delivery across Pakistan on orders over Rs 9,000' },
  { icon: ShieldCheck, text: 'Perfect-fit guarantee — free alterations within 14 days' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 4000)
    return () => clearInterval(t)
  }, [])

  if (!isVisible) return null

  const Item = MESSAGES[index]
  const Icon = Item.icon

  return (
    <div className="relative bg-[var(--brand-primary,#0F4D36)] text-white">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs sm:text-sm tracking-wide">
        <div className="flex items-center gap-2 animate-fade-in" key={index}>
          <Icon className="h-3.5 w-3.5 text-[var(--brand-secondary,#B48A3C)]" strokeWidth={2} />
          <p className="truncate">{Item.text}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
