'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-sky-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">DE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Diseños Empresariales</h3>
                <p className="text-gray-400 text-sm">Creatividad que impulsa tu negocio</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Transformamos ideas en soluciones digitales impactantes.
              Especialistas en diseño web y sistemas ERP para empresas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Diseño Web Personalizado</li>
              <li className="text-gray-300">Sistemas ERP para PYMES</li>
              <li className="text-gray-300">Desarrollo Frontend</li>
              <li className="text-gray-300">Consultoría Digital</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Diseños Empresariales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
