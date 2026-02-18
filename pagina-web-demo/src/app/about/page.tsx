'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card'

export default function About() {
  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transformamos ideas en soluciones digitales impactantes.
            Especialistas en diseño web y sistemas ERP para PYMES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Nuestra Misión</CardTitle>
                <CardDescription>Impulsar el crecimiento de tu negocio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Nuestra misión es proporcionar soluciones digitales de alta calidad que impulsen
                  el crecimiento y la transformación de las pequeñas y medianas empresas.
                  Creemos que cada negocio tiene el potencial de destacarse en el mundo digital,
                  y estamos aquí para hacerlo realidad.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Nuestra Visión</CardTitle>
                <CardDescription>Ser líderes en soluciones digitales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Aspiramos a ser reconocidos como los principales proveedores de soluciones
                  digitales para PYMES en la región, estableciendo nuevos estándares de
                  excelencia en diseño web y desarrollo de sistemas empresariales.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
          <p className="text-xl text-gray-600">Lo que nos guía en cada proyecto</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Creatividad',
              description: 'Pensamos fuera de la caja para crear soluciones únicas que se adapten a tus necesidades específicas.',
              icon: '🎨',
            },
            {
              title: 'Excelencia',
              description: 'Nos comprometemos con la calidad en cada detalle, desde el diseño hasta la implementación.',
              icon: '⭐',
            },
            {
              title: 'Innovación',
              description: 'Estamos siempre al tanto de las últimas tendencias y tecnologías para ofrecerte lo mejor.',
              icon: '🚀',
            },
            {
              title: 'Compromiso',
              description: 'Nos involucramos completamente en cada proyecto para asegurar su éxito.',
              icon: '🤝',
            },
            {
              title: 'Transparencia',
              description: 'Mantenemos una comunicación clara y honesta en todo el proceso.',
              icon: '✨',
            },
            {
              title: 'Orientación al Cliente',
              description: 'Tus necesidades son nuestra prioridad. Escuchamos, entendemos y ejecutamos.',
              icon: '🎯',
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card hoverable>
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
