import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import ServicesPreview from '../components/sections/ServicesPreview'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ServicesPreview />
      <Testimonials />
      <CTA />
    </main>
  )
}