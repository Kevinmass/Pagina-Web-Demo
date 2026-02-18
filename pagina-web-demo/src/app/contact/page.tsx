'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card'

const whatsappHref = 'https://wa.me/543585760730'

const phones = [
  { label: '3585760730', href: 'tel:3585760730' },
  { label: '3525 43-7510', href: 'tel:3525437510' },
]

const emails = [
  { label: 'ignaciomagoiia@hotmail.com', href: 'mailto:ignaciomagoiia@hotmail.com' },
  { label: 'massholderkevin@gmail.com', href: 'mailto:massholderkevin@gmail.com' },
]

export default function Contact() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contáctanos</h1>
          <p className="text-xl text-white leading-relaxed">
            Esta es nuestra información directa de contacto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Información de Contacto</CardTitle>
              <CardDescription>
                Teléfonos y correos para comunicarte con nosotros.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Teléfonos</h3>
                <div className="space-y-2">
                  {phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className="block text-gray-700 transition-colors hover:text-sky-700"
                    >
                      {phone.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Emails</h3>
                <div className="space-y-2">
                  {emails.map((email) => (
                    <a
                      key={email.label}
                      href={email.href}
                      className="block text-gray-700 transition-colors hover:text-sky-700"
                    >
                      {email.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l1.3 3.9a1 1 0 01-.3 1.08l-1.6 1.3a13.2 13.2 0 006.12 6.12l1.3-1.6a1 1 0 011.08-.3l3.9 1.3a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z"
                    />
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
