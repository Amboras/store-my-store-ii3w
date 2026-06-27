'use client'

import { useState } from 'react'

const FABRICS = ['Cotton', 'Linen', 'Silk', 'Lawn', 'Khaddar', 'Chiffon']
const COLLARS = ['Mandarin', 'Band', 'V-Neck', 'Round', 'Spread']
const CUFFS = ['Button', 'French', 'Barrel', 'No Cuff']
const FITS = ['Slim', 'Regular', 'Relaxed']
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom']

type Selection = {
  fabric: string
  collar: string
  cuff: string
  fit: string
  size: string
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 text-sm border transition-colors ${
              value === opt
                ? 'border-foreground bg-foreground text-background'
                : 'border-foreground/20 hover:border-foreground'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Builder() {
  const [selection, setSelection] = useState<Selection>({
    fabric: '',
    collar: '',
    cuff: '',
    fit: '',
    size: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof Selection) => (value: string) =>
    setSelection((prev) => ({ ...prev, [key]: value }))

  const isComplete = Object.values(selection).every(Boolean)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isComplete) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container-custom py-section text-center">
        <h2 className="text-h2 font-heading font-semibold mb-4">Order Received!</h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Thank you for your bespoke design request. Our team will contact you within 24 hours to
          confirm your specifications and arrange payment. Delivery in 7–10 days.
        </p>
        <button
          type="button"
          className="mt-8 bg-foreground text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          onClick={() => {
            setSelection({ fabric: '', collar: '', cuff: '', fit: '', size: '' })
            setSubmitted(false)
          }}
        >
          Design Another
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="border-b">
        <div className="container-custom py-section-sm text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">Bespoke</p>
          <h1 className="text-h1 font-heading font-semibold">Design Your Shalwar Kameez</h1>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
            Choose your fabric, collar, cuffs, fit and size. We craft and deliver your bespoke piece
            in 7–10 days with a perfect-fit guarantee.
          </p>
        </div>
      </div>

      <div className="container-custom py-section">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <OptionGroup
            label="Fabric"
            options={FABRICS}
            value={selection.fabric}
            onChange={set('fabric')}
          />
          <OptionGroup
            label="Collar"
            options={COLLARS}
            value={selection.collar}
            onChange={set('collar')}
          />
          <OptionGroup
            label="Cuffs"
            options={CUFFS}
            value={selection.cuff}
            onChange={set('cuff')}
          />
          <OptionGroup
            label="Fit"
            options={FITS}
            value={selection.fit}
            onChange={set('fit')}
          />
          <OptionGroup
            label="Size"
            options={SIZES}
            value={selection.size}
            onChange={set('size')}
          />

          {/* Contact details */}
          <div className="mb-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Your Details</p>
            <input
              type="text"
              placeholder="Full name"
              required
              className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Any additional notes or measurements (optional)"
              rows={3}
              className="w-full border-b border-foreground/20 bg-transparent px-0 py-3 text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!isComplete}
            className="bg-foreground text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit Design Request
          </button>

          {!isComplete && (
            <p className="mt-3 text-xs text-muted-foreground">
              Please select a fabric, collar, cuffs, fit and size to continue.
            </p>
          )}
        </form>
      </div>
    </>
  )
}
