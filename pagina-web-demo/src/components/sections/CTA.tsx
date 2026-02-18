'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Contáctanos hoy mismo y comencemos a trabajar juntos en tu proyecto digital. 
            Transformamos tus ideas en soluciones que generan resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-primary-500 border-white hover:bg-transparent hover:text-white">
              📞 Programar Consulta
            </Button>
            <Button size="lg" variant="secondary" href="/contact">
              📧 Contactar por Email
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-400">
            <p className="text-primary-200 text-sm">
              🚀 Entregamos proyectos en tiempo récord
              <span className="mx-4">•</span>
              💡 Soluciones 100% personalizadas
              <span className="mx-4">•</span>
              📈 Resultados medibles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}