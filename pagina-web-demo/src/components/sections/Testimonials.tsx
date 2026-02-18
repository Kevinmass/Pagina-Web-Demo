'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '../ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'González Boutique',
      role: 'Propietaria',
      quote: 'El sitio web que nos crearon superó todas nuestras expectativas. Las ventas aumentaron un 40% en el primer mes.',
      avatar: '👩‍💼',
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Rodríguez Distribuciones',
      role: 'Gerente General',
      quote: 'El sistema ERP personalizado nos permitió optimizar todos nuestros procesos. Ahora tenemos control total de nuestro inventario.',
      avatar: '👨‍💼',
    },
    {
      name: 'Ana Martínez',
      company: 'Martínez Consultores',
      role: 'Directora',
      quote: 'Profesionalismo, creatividad y cumplimiento de plazos. Altamente recomendados para cualquier proyecto digital.',
      avatar: '👩‍💻',
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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} - {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}