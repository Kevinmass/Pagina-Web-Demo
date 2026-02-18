'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card'

export default function Features() {
  const features = [
    {
      title: 'Diseño Web Impactante',
      description: 'Páginas web personalizadas que capturan la esencia de tu marca y generan conversiones.',
      icon: '🎨',
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Sistemas ERP Inteligentes',
      description: 'Soluciones ERP a medida que optimizan tus procesos y aumentan la productividad.',
      icon: '📊',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      title: 'Experiencia de Usuario',
      description: 'Interfaces intuitivas y accesibles que mejoran la experiencia de tus usuarios.',
      icon: '📱',
      color: 'from-accent-500 to-accent-600',
    },
    {
      title: 'Soporte Continuo',
      description: 'Asesoramiento y mantenimiento continuo para asegurar el éxito de tu proyecto.',
      icon: '⚡',
      color: 'from-success-500 to-success-600',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por qué elegirnos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos creatividad, tecnología y experiencia para ofrecer soluciones digitales 
            que realmente hacen la diferencia en tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card hoverable variant="feature">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mb-4`}>
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}