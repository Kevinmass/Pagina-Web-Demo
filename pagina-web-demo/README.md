# Diseños Empresariales - Documentación del Proyecto

## 📋 Tabla de Contenidos
- [Resumen del Proyecto](#resumen-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Cómo Correr el Proyecto](#cómo-correr-el-proyecto)
- [Cómo Modificar el Contenido](#cómo-modificar-el-contenido)
- [Cómo Agregar Productos/Servicios](#cómo-agregar-productos/servicios)
- [Cómo Personalizar el Diseño](#cómo-personalizar-el-diseño)
- [Despliegue](#despliegue)
- [Troubleshooting](#troubleshooting)

## 🎯 Resumen del Proyecto

Sitio web moderno para "Diseños Empresariales", una empresa de desarrollo web y sistemas ERP para PYMES. El proyecto está construido con:

- **Next.js 16** (App Router)
- **React 19** con TypeScript
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Diseño completamente responsive**

## 🏗️ Estructura del Proyecto

```
pagina-web-demo/
├── src/
│   ├── app/                          # Páginas del sitio
│   │   ├── layout.tsx               # Layout principal
│   │   ├── page.tsx                 # Página de inicio
│   │   ├── about/                   # Página "Sobre Nosotros"
│   │   ├── services/                # Página de servicios
│   │   ├── portfolio/               # Página de portafolio
│   │   └── contact/                 # Página de contacto
│   ├── components/                  # Componentes reutilizables
│   │   ├── layout/                  # Componentes de layout
│   │   │   ├── Header.tsx          # Encabezado con menú
│   │   │   └── Footer.tsx          # Pie de página
│   │   ├── ui/                     # Componentes UI
│   │   │   ├── Button.tsx          # Botones con variantes
│   │   │   ├── Card.tsx            # Tarjetas con animaciones
│   │   │   └── Slideshow.tsx       # Carrusel de imágenes
│   │   └── sections/               # Secciones de páginas
│   │       ├── Hero.tsx            # Sección hero principal
│   │       ├── Features.tsx        # Sección de características
│   │       ├── ServicesPreview.tsx # Vista previa de servicios
│   │       ├── Testimonials.tsx    # Testimonios de clientes
│   │       └── CTA.tsx             # Llamado a la acción
│   ├── styles/                     # Estilos globales
│   └── lib/                        # Utilidades y constantes
├── public/                         # Archivos estáticos
├── package.json                    # Dependencias del proyecto
├── next.config.ts                  # Configuración de Next.js
├── tailwind.config.ts              # Configuración de Tailwind
├── tsconfig.json                   # Configuración de TypeScript
└── README.md                       # Este archivo
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 16.1.6**: Framework React con enrutamiento, SSR y optimizaciones
- **React 19.2.3**: Biblioteca de UI
- **TypeScript 5**: Tipado estático para mejor desarrollo
- **Tailwind CSS 4**: Framework de CSS utilitario
- **Framer Motion 12.4.7**: Animaciones y transiciones

### Desarrollo
- **ESLint**: Linting de código
- **Node.js**: Entorno de ejecución

## 🚀 Cómo Correr el Proyecto

### Requisitos Previos
- Node.js 18 o superior
- npm o yarn

### Pasos para Ejecutar

1. **Clona o descarga el proyecto**
   ```bash
   cd pagina-web-demo
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   - Ve a `http://localhost:3000`

### Comandos Disponibles
```bash
npm run dev     # Inicia el servidor de desarrollo
npm run build   # Construye el proyecto para producción
npm run start   # Inicia el servidor de producción
npm run lint    # Ejecuta el linter
```

## 📝 Cómo Modificar el Contenido

### 1. Texto y Contenido General

#### Metadatos y SEO (layout.tsx)
```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Diseños Empresariales - Soluciones Digitales Creativas',
  description: 'Especialistas en diseño web personalizado y sistemas ERP para PYMES...',
  // ... más metadatos
}
```

#### Contenido de Páginas
- **Home**: `src/app/page.tsx`
- **Sobre Nosotros**: `src/app/about/page.tsx`
- **Servicios**: `src/app/services/page.tsx`
- **Portafolio**: `src/app/portfolio/page.tsx`
- **Contacto**: `src/app/contact/page.tsx`

### 2. Imágenes y Assets

#### Imágenes de Slideshow
```typescript
// En src/app/services/page.tsx
const webDesignImages = [
  '/placeholder-web-1.jpg',    // Reemplaza con tu imagen
  '/placeholder-web-2.jpg',    // Reemplaza con tu imagen
  '/placeholder-web-3.jpg',    // Reemplaza con tu imagen
]
```

#### Imágenes en el Portafolio
```typescript
// En src/app/portfolio/page.tsx
const projects = [
  {
    title: 'Tu Proyecto',
    images: ['/tu-imagen-1.jpg', '/tu-imagen-2.jpg'],
    // ...
  }
]
```

### 3. Contacto y Redes Sociales

#### Información de Contacto (Footer)
```typescript
// src/components/layout/Footer.tsx
// Cambia estos valores:
const contactInfo = {
  phone: '+54 9 11 1234-5678',
  email: 'hola@diseños-empresariales.com',
  address: 'Av. Corrientes 1234, CABA'
}
```

#### Formulario de Contacto
```typescript
// src/app/contact/page.tsx
// El formulario ya está configurado, solo necesitas conectarlo a tu backend
```

## 🎯 Cómo Agregar Productos/Servicios

### 1. Agregar un Nuevo Servicio

#### Paso 1: Modifica la página de servicios
```typescript
// src/app/services/page.tsx

// Agrega tu nuevo servicio al array
const services = [
  {
    id: 3,
    title: 'Tu Nuevo Servicio',
    category: 'Categoría',
    description: 'Descripción de tu nuevo servicio...',
    features: [
      'Característica 1',
      'Característica 2',
      'Característica 3'
    ],
    images: ['/imagen-1.jpg', '/imagen-2.jpg'],
    href: '/services#tu-nuevo-servicio',
  }
]
```

#### Paso 2: Crea una sección específica (opcional)
```typescript
// Agrega una nueva sección en src/app/services/page.tsx
<motion.section
  id="tu-nuevo-servicio"
  // ... props de motion
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Tu contenido aquí */}
  </div>
</motion.section>
```

### 2. Agregar un Nuevo Proyecto al Portafolio

```typescript
// src/app/portfolio/page.tsx

const projects = [
  // ... proyectos existentes
  {
    id: 5,
    title: 'Nuevo Proyecto',
    category: 'Web Design', // o 'Sistema ERP'
    description: 'Descripción del proyecto...',
    images: ['/proyecto-1.jpg', '/proyecto-2.jpg'],
    client: 'Nombre del Cliente',
    year: '2024',
    features: ['Característica 1', 'Característica 2'],
    link: 'https://tuproyecto.com',
  }
]
```

### 3. Agregar Nuevos Testimonios

```typescript
// src/app/portfolio/page.tsx o src/components/sections/Testimonials.tsx

const testimonials = [
  // ... testimonios existentes
  {
    name: 'Nombre del Cliente',
    company: 'Empresa del Cliente',
    role: 'Cargo',
    quote: 'Comentario del cliente sobre tu servicio...',
    avatar: '👨‍💼', // o el emoji que prefieras
  }
]
```

## 🎨 Cómo Personalizar el Diseño

### 1. Colores y Paleta

#### Modifica la paleta de colores
```typescript
// src/tailwind.config.ts

colors: {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    // ... más tonos
    500: '#f59e0b', // Color principal (naranja)
    // ... más tonos
  },
  secondary: {
    500: '#0ea5e9', // Color secundario (azul)
  },
  // ... más colores
}
```

#### Uso de colores en componentes
```tsx
// Ejemplos de uso en componentes
<div className="bg-gradient-to-r from-primary-500 to-secondary-500">
<div className="text-primary-500">
<div className="border-primary-200">
```

### 2. Tipografía

#### Cambia la fuente
```typescript
// src/tailwind.config.ts

fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'], // Cambia 'Inter' por tu fuente
}
```

### 3. Animaciones

#### Modifica animaciones existentes
```typescript
// src/tailwind.config.ts

animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  // ... más animaciones
}
```

#### Crea nuevas animaciones
```typescript
// En cualquier componente
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### 4. Componentes Personalizados

#### Crea nuevos componentes UI
```typescript
// src/components/ui/CustomComponent.tsx

export default function CustomComponent({ children }) {
  return (
    <div className="tu-clase-personalizada">
      {children}
    </div>
  )
}
```

## 🚀 Despliegue

### Opciones de Despliegue

#### 1. Vercel (Recomendado para Next.js)
```bash
# Instala Vercel CLI
npm install -g vercel

# Despliega
vercel
```

#### 2. Netlify
```bash
# Construye el proyecto
npm run build

# Sube la carpeta /out a Netlify
```

#### 3. GitHub Pages
```bash
# Instala gh-pages
npm install --save-dev gh-pages

# Agrega scripts a package.json
"scripts": {
  "build": "next build && next export",
  "deploy": "gh-pages -d out"
}
```

### Variables de Entorno
```bash
# Crea un archivo .env.local
NEXT_PUBLIC_API_URL=your-api-url
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
```

## 🔧 Troubleshooting

### Problemas Comunes

#### 1. Errores de dependencias
```bash
# Limpia caché y reinstala
rm -rf node_modules package-lock.json
npm install
```

#### 2. Errores de TypeScript
```bash
# Verifica tipos
npx tsc --noEmit

# Soluciona problemas comunes
npm install --save-dev @types/node @types/react
```

#### 3. Problemas de estilos
```bash
# Verifica que Tailwind esté configurado correctamente
# Revisa src/tailwind.config.ts
# Asegúrate de que las clases estén en el content array
```

#### 4. Errores de Next.js
```bash
# Reinicia el servidor de desarrollo
# Borra la carpeta .next y reinicia
rm -rf .next
npm run dev
```

### Comandos Útiles

```bash
# Verifica dependencias
npm list

# Actualiza dependencias
npm update

# Limpia caché de npm
npm cache clean --force

# Verifica versiones
node --version
npm --version
```

## 📞 Soporte

Para soporte o preguntas sobre el proyecto:

1. **Revisa este README** para soluciones comunes
2. **Verifica la consola** del navegador para errores
3. **Revisa los logs** de desarrollo
4. **Consulta la documentación** de [Next.js](https://nextjs.org/docs) y [Tailwind CSS](https://tailwindcss.com/docs)

---

**¡Listo!** Con esta documentación, tu compañero de trabajo podrá entender completamente el proyecto y realizar modificaciones sin problemas.