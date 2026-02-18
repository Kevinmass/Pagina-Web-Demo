'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import Slideshow from '../../components/ui/Slideshow'

export default function Services() {
  // Placeholder images for the slideshow
  const webDesignImages = [
    '/placeholder-web-1.jpg',
    '/placeholder-web-2.jpg',
    '/placeholder-web-3.jpg',
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Servicios</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Soluciones digitales completas para impulsar el crecimiento de tu negocio. 
            Diseño web personalizado y sistemas ERP para PYMES.
          </p>
        </motion.div>

        {/* Web Design Service */}
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
                  <div className="space-y-4">
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
                    <Button size="lg" href="/contact">
                      📞 Consultar Presupuesto
                    </Button>
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

        {/* ERP System Service */}
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
                  <div className="space-y-4">
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
                    <Button size="lg" variant="secondary" href="/contact">
                      📞 Solicitar Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
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