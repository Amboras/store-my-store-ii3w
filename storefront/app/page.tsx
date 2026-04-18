'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  ArrowRight,
  Scissors,
  Ruler,
  Package,
  ShieldCheck,
  Truck,
  Sparkles,
  Star,
  Check,
} from 'lucide-react'
import { HERO_PLACEHOLDER, LIFESTYLE_PLACEHOLDER } from '@/lib/utils/placeholder-images'
import { trackMetaEvent } from '@/lib/meta-pixel'

const STEPS = [
  {
    n: '01',
    icon: Sparkles,
    title: 'Choose Your Fabric',
    body: 'Browse hand-picked cotton, wash-and-wear, karandi and premium blends — filtered by season, price and colour.',
  },
  {
    n: '02',
    icon: Scissors,
    title: 'Customise the Cut',
    body: 'Select collar, cuffs, fit, length and pocket style. Watch your kameez take shape with a live preview.',
  },
  {
    n: '03',
    icon: Ruler,
    title: 'Pick Size or Measure',
    body: 'Choose a standard size, or enter your own measurements with our step-by-step guide. Save them for next time.',
  },
]

const FABRIC_SWATCHES = [
  { name: 'Egyptian Cotton', season: 'Summer', price: 'Rs 4,800', hue: 'bg-stone-100', accent: 'ring-stone-300' },
  { name: 'Soft Wash & Wear', season: 'All Season', price: 'Rs 5,200', hue: 'bg-neutral-200', accent: 'ring-neutral-400' },
  { name: 'Karandi Blend', season: 'Winter', price: 'Rs 6,400', hue: 'bg-amber-100', accent: 'ring-amber-300' },
  { name: 'Raw Silk Signature', season: 'Formal', price: 'Rs 9,800', hue: 'bg-emerald-900/80', accent: 'ring-emerald-700' },
  { name: 'Pashmina Wool', season: 'Winter', price: 'Rs 10,500', hue: 'bg-stone-600', accent: 'ring-stone-700' },
  { name: 'Ivory Cotton Silk', season: 'Wedding', price: 'Rs 12,400', hue: 'bg-[#f5ecd9]', accent: 'ring-amber-300' },
]

const TESTIMONIALS = [
  {
    name: 'Hamza A.',
    city: 'Lahore',
    text: 'Fit is spot-on and the karandi feels premium. I’ll never go back to ready-made.',
    rating: 5,
  },
  {
    name: 'Bilal R.',
    city: 'Karachi',
    text: 'Ordered the Signature raw silk for my nikkah. Delivery was exactly 8 days. Flawless.',
    rating: 5,
  },
  {
    name: 'Usman K.',
    city: 'Islamabad',
    text: 'The measurement guide is excellent. Got a perfect collar — band style with antique buttons.',
    rating: 5,
  },
]

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative bg-background overflow-hidden">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-center py-16 lg:py-28">
          {/* Text */}
          <div className="lg:col-span-6 space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-[var(--brand-secondary,#B48A3C)]" />
              Bespoke · Pakistan · Est. 2024
            </div>
            <h1 className="font-heading font-medium text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.02] tracking-tight text-balance">
              Design Your Own <br />
              <em className="italic text-[var(--brand-primary,#0F4D36)]">Shalwar Kameez</em>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Choose your fabric, customise every stitch, and enter your measurements — we tailor
              and deliver to your door in 7–10 days. Complimentary alterations guaranteed.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/design"
                className="group inline-flex items-center gap-2 bg-[var(--brand-primary,#0F4D36)] text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
              >
                Start Customising
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-foreground/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors"
              >
                Shop Ready Styles
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-primary,#0F4D36)]" strokeWidth={1.5} />
                Perfect-Fit Guarantee
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[var(--brand-primary,#0F4D36)]" strokeWidth={1.5} />
                Free delivery Rs 9,000+
              </div>
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4 text-[var(--brand-primary,#0F4D36)]" strokeWidth={1.5} />
                Stitching included
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] bg-muted overflow-hidden animate-fade-in">
              <Image
                src={HERO_PLACEHOLDER}
                alt="Bespoke shalwar kameez"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Overlay price tag */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto bg-background/95 backdrop-blur border border-border px-5 py-4 max-w-xs">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">From</p>
                <p className="font-heading text-3xl font-semibold mt-0.5">Rs 4,500</p>
                <p className="text-xs text-muted-foreground mt-1">Essential Collection — fabric + stitching included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
      <section className="py-section bg-muted/40">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">How It Works</p>
            <h2 className="font-heading text-[2rem] lg:text-[2.75rem] leading-tight">
              Three steps to a perfectly tailored kameez.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ n, icon: Icon, title, body }) => (
              <div key={n} className="relative bg-background border border-border p-8 group hover:border-[var(--brand-primary,#0F4D36)] transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <Icon className="h-8 w-8 text-[var(--brand-primary,#0F4D36)]" strokeWidth={1.3} />
                  <span className="font-heading text-4xl text-muted-foreground/40">{n}</span>
                </div>
                <h3 className="font-heading text-2xl mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/design"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] link-underline pb-0.5"
            >
              Begin Your Design <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FEATURED FABRICS ─────────────────────────── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">Featured Fabrics</p>
              <h2 className="font-heading text-[2rem] lg:text-[2.75rem] leading-tight mt-2">
                Hand-picked, season by season.
              </h2>
            </div>
            <Link
              href="/design"
              className="text-sm font-semibold uppercase tracking-[0.15em] link-underline pb-0.5 self-start sm:self-end"
            >
              Explore All Fabrics →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {FABRIC_SWATCHES.map((f) => (
              <Link
                key={f.name}
                href="/design"
                className="group relative overflow-hidden bg-muted aspect-[3/4] cursor-pointer"
              >
                <div className={`absolute inset-0 ${f.hue} transition-transform duration-700 group-hover:scale-105 fabric-grain`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] opacity-80">{f.season}</p>
                  <h3 className="font-heading text-xl leading-tight mt-1">{f.name}</h3>
                  <p className="text-sm opacity-90 mt-0.5">{f.price} / suit</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── COLLECTIONS (ESSENTIAL vs SIGNATURE) ─────────────────────────── */}
      <section className="py-section bg-[var(--brand-primary,#0F4D36)] text-white">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">Two Collections</p>
            <h2 className="font-heading text-[2rem] lg:text-[2.75rem] leading-tight text-white">
              Choose the one that fits your moment.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Essential */}
            <div className="bg-background text-foreground p-8 lg:p-10 flex flex-col">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Essential</p>
              <h3 className="font-heading text-4xl mt-2">Everyday, refined.</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Breathable cottons and wash-and-wear fabrics, tailored for office, campus and
                comfortable weekends. From Rs 4,500.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {['Cotton, lawn, wash-and-wear', 'Regular & slim fit', 'Free stitching', '7-day delivery'].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--brand-primary,#0F4D36)]" strokeWidth={2} /> {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/collections/essential"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] link-underline pb-0.5 self-start"
              >
                Explore Essential <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Signature */}
            <div className="bg-foreground text-background p-8 lg:p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.25em] text-[var(--brand-secondary,#B48A3C)]">
                ★ Premium
              </div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">Signature</p>
              <h3 className="font-heading text-4xl mt-2">Formal, occasional, unforgettable.</h3>
              <p className="text-background/70 mt-4 leading-relaxed">
                Raw silk, pashmina, cotton-silk and heritage blends. Hand-finished buttons,
                interlined collars and optional embroidery.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {['Raw silk, pashmina, cotton-silk', 'Hand-finished details', 'Optional embroidery', 'Wedding-ready'].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--brand-secondary,#B48A3C)]" strokeWidth={2} /> {i}
                  </li>
                ))}
              </ul>
              <Link
                href="/collections/signature"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] pb-0.5 self-start text-[var(--brand-secondary,#B48A3C)] hover:opacity-80"
              >
                Explore Signature <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── EDITORIAL / STORY ─────────────────────────── */}
      <section className="py-section">
        <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted overflow-hidden">
            <Image
              src={LIFESTYLE_PLACEHOLDER}
              alt="Atelier craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6 lg:max-w-md">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">Perfect-Fit Guarantee</p>
            <h2 className="font-heading text-[2rem] lg:text-[2.5rem] leading-tight">
              If it doesn’t fit right, we’ll make it right.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every kameez is sewn from scratch by our master tailors in Lahore. If the fit isn’t
              perfect when it arrives, send it back within 14 days — we’ll re-tailor or remake it
              free of charge.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
              <div>
                <p className="font-heading text-2xl">7–10</p>
                <p className="text-xs text-muted-foreground mt-1">Days delivery</p>
              </div>
              <div>
                <p className="font-heading text-2xl">14-Day</p>
                <p className="text-xs text-muted-foreground mt-1">Free alterations</p>
              </div>
              <div>
                <p className="font-heading text-2xl">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Hand-finished</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] link-underline pb-0.5"
            >
              Our Atelier <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */}
      <section className="py-section bg-muted/40">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">From Our Customers</p>
            <h2 className="font-heading text-[2rem] lg:text-[2.75rem] leading-tight">
              Worn across Pakistan.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-background border border-border p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[var(--brand-secondary,#B48A3C)] text-[var(--brand-secondary,#B48A3C)]"
                    />
                  ))}
                </div>
                <blockquote className="font-heading text-lg leading-snug">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-muted-foreground"> · {t.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── BUNDLE OFFER ─────────────────────────── */}
      <section className="py-section-sm">
        <div className="container-custom">
          <div className="bg-foreground text-background p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <Package className="h-10 w-10 text-[var(--brand-secondary,#B48A3C)] flex-shrink-0" strokeWidth={1.3} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">Limited Bundle</p>
                <h3 className="font-heading text-2xl lg:text-3xl mt-1">Two suits, 15% off.</h3>
                <p className="text-sm text-background/70 mt-1">
                  Pair any two Essential or Signature designs — discount applies at checkout.
                </p>
              </div>
            </div>
            <Link
              href="/design"
              className="inline-flex items-center gap-2 bg-[var(--brand-secondary,#B48A3C)] text-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity flex-shrink-0"
            >
              Start Building <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── NEWSLETTER ─────────────────────────── */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-secondary,#B48A3C)]">The House Letter</p>
          <h2 className="font-heading text-[2rem] lg:text-[2.5rem] mt-2">
            New fabrics, early access.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Be first to see new seasonal arrivals and exclusive subscriber-only fabrics.
          </p>
          <form className="mt-8 flex gap-2" onSubmit={handleNewsletter}>
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 border-b border-foreground/30 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
