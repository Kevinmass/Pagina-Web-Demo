'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card'
import Slideshow from '../../components/ui/Slideshow'

export default function Services() {
  const webDesignImages = [
    '/images/web1.png',
    '/images/web2.png',
    '/images/web3.png',
  ]

  const erpImages = [
    '/images/ERP1.png',
    '/images/ERP2.png',
    '/images/ERP3.png',
    '/images/ERP4.png',
    '/images/ERP5.png',
  ]

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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros servicios
          </h1>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Soluciones digitales completas para impulsar el crecimiento de tu negocio.
            Diseño web personalizado y sistemas ERP para PYMES.
          </p>
        </motion.div>

        <motion.section
          id="web-design"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl mb-4">Diseño Web Personalizado</CardTitle>
                  <CardDescription>
                    Creamos páginas web únicas que reflejan la identidad de tu marca
                    y generan conversiones. Cada proyecto es completamente personalizado
                    para adaptarse a tus necesidades específicas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-900">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>Diseño responsive para todos los dispositivos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>Optimización SEO para mejor posicionamiento</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>Integración de redes sociales y analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>Formularios de contacto y CRM</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>Hosting y mantenimiento incluido</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/543585760730"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-md transition-colors hover:bg-green-700"
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
            </div>

            <div>
              <Slideshow
                images={webDesignImages}
                autoPlay={true}
                interval={5000}
                showControls={true}
                showIndicators={true}
              />
              <p className="text-center text-gray-600 mt-4 text-sm">
                Capturas de proyectos web personalizados
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="erp-system"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Slideshow
                images={erpImages}
                autoPlay={true}
                interval={4000}
                showControls={true}
                showIndicators={true}
              />
              <p className="text-center text-gray-600 mt-4 text-sm">
                Capturas del sistema ERP en acción
              </p>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl mb-4">Sistema ERP para PYMES</CardTitle>
                  <CardDescription>
                    Soluciones ERP a medida que optimizan tus procesos y aumentan
                    la productividad de tu empresa. Control total de tu negocio
                    en una sola plataforma.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-900">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Gestión de inventario en tiempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Facturación electrónica integrada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Control de stock y proveedores</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Reportes y estadísticas en tiempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Personalizable según tu negocio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full"></span>
                      <span>Soporte técnico 24/7</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/543585760730"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-md transition-colors hover:bg-green-700"
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
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-xl text-gray-600">Pasos que seguimos para garantizar el éxito de tu proyecto</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Análisis',
                description: 'Entendemos tus necesidades y objetivos para crear una estrategia a medida.',
                icon: '🔍',
              },
              {
                step: '2',
                title: 'Diseño',
                description: 'Creamos prototipos y diseños que reflejan la esencia de tu marca.',
                icon: '🎨',
              },
              {
                step: '3',
                title: 'Desarrollo',
                description: 'Implementamos la solución con las mejores prácticas y tecnologías.',
                icon: '💻',
              },
              {
                step: '4',
                title: 'Entrega',
                description: 'Lanzamos tu proyecto y te brindamos capacitación y soporte.',
                icon: '🚀',
              },
            ].map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <div className="text-4xl mb-4">{process.icon}</div>
                    <CardTitle className="text-2xl">{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
