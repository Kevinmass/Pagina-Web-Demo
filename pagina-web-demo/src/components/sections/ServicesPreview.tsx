'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'

export default function ServicesPreview() {
  const services = [
    {
      title: 'Diseño Web Personalizado',
      description: 'Creamos páginas web únicas que reflejan la identidad de tu marca y generan resultados.',
      features: ['Diseño responsive', 'Optimización SEO', 'Integración de redes sociales', 'Formularios de contacto'],
      image: '/placeholder-web.jpg',
      href: '/services#web-design',
    },
    {
      title: 'Sistema ERP para PYMES',
      description: 'Soluciones ERP a medida que optimizan tus procesos y aumentan la productividad.',
      features: ['Gestión de inventario', 'Facturación electrónica', 'Control de stock', 'Reportes en tiempo real'],
      image: '/images/ERP1.jpg',
      href: '/services#erp-system',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones digitales completas para impulsar el crecimiento de tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <Card hoverable variant="service">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex space-x-4">
                    <Button href={service.href}>Ver Detalles</Button>
                    <Button variant="outline" href="/contact">Consultar</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}