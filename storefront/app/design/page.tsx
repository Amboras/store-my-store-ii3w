import { Metadata } from 'next'
import Builder from './builder'

export const metadata: Metadata = {
  title: 'Design Your Shalwar Kameez',
  description:
    'Design your own bespoke shalwar kameez. Choose fabric, collar, cuffs, fit and size — delivered in 7–10 days with a perfect-fit guarantee.',
}

export default function DesignPage() {
  return <Builder />
}
