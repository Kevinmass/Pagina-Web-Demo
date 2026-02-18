import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diseños Empresariales - Soluciones Digitales Creativas',
  description: 'Especialistas en diseño web personalizado y sistemas ERP para PYMES. Transformamos ideas en soluciones digitales impactantes.',
  keywords: 'diseño web, desarrollo web, ERP, sistemas empresariales, páginas web personalizadas',
  authors: [{ name: 'Diseños Empresariales' }],
  openGraph: {
    title: 'Diseños Empresariales - Soluciones Digitales Creativas',
    description: 'Especialistas en diseño web personalizado y sistemas ERP para PYMES.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://diseños-empresariales.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}