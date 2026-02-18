# 📝 Contenido a Modificar - Guía Rápida

Esta guía te indica exactamente qué archivos y secciones necesitas modificar para personalizar tu sitio web con tu contenido real.

## 🎯 **Archivos Clave a Modificar**

### 1. **Información de Contacto** (5 minutos)
**Archivo**: `src/components/layout/Footer.tsx`
```typescript
// Líneas 20-22: Cambia estos valores
const contactInfo = {
  phone: '+54 9 11 1234-5678',        // ← TU TELÉFONO
  email: 'hola@diseños-empresariales.com', // ← TU EMAIL
  address: 'Av. Corrientes 1234, CABA'     // ← TU DIRECCIÓN
}
```

**Archivo**: `src/app/contact/page.tsx`
```typescript
// Línea 150: Cambia el email de destino
// En el handleSubmit, cambia:
console.log('Form data:', formData)  // ← Conecta a tu backend aquí
```

### 2. **Metadatos y SEO** (2 minutos)
**Archivo**: `src/app/layout.tsx`
```typescript
// Líneas 10-15: Cambia estos valores
export const metadata: Metadata = {
  title: 'Diseños Empresariales - Soluciones Digitales Creativas',  // ← TU TÍTULO
  description: 'Especialistas en diseño web personalizado...',     // ← TU DESCRIPCIÓN
  keywords: 'diseño web, desarrollo web, ERP, sistemas empresariales', // ← TUS PALABRAS CLAVE
}
```

### 3. **Contenido Principal** (10 minutos)

#### **Hero Section** (Archivo: `src/app/page.tsx`)
```typescript
// Líneas 15-20: Estadísticas
const stats = [
  { number: '50+', label: 'Proyectos Exitosos' },     // ← TUS PROYECTOS
  { number: '98%', label: 'Satisfacción Clientes' },  // ← TU SATISFACCIÓN
  { number: '24/7', label: 'Soporte Técnico' }        // ← TU SOPORTE
]
```

#### **Sobre Nosotros** (Archivo: `src/app/about/page.tsx`)
```typescript
// Líneas 15-20: Tu misión y visión
const mission = "Nuestra misión es proporcionar soluciones digitales..."  // ← TU MISIÓN
const vision = "Aspiramos a ser reconocidos como los principales..."     // ← TU VISIÓN
```

### 4. **Imágenes y Slideshows** (Importante - 15 minutos)

#### **Slideshow de Servicios** (Archivo: `src/app/services/page.tsx`)
```typescript
// Líneas 15-20: Imágenes de tus proyectos web
const webDesignImages = [
  '/placeholder-web-1.jpg',    // ← IMAGEN 1 DE TUS PROYECTOS WEB
  '/placeholder-web-2.jpg',    // ← IMAGEN 2 DE TUS PROYECTOS WEB
  '/placeholder-web-3.jpg',    // ← IMAGEN 3 DE TUS PROYECTOS WEB
]

// Líneas 25-30: Imágenes de tu ERP
const erpImages = [
  '/placeholder-erp-1.jpg',    // ← IMAGEN 1 DE TU ERP
  '/placeholder-erp-2.jpg',    // ← IMAGEN 2 DE TU ERP
  '/placeholder-erp-3.jpg',    // ← IMAGEN 3 DE TU ERP
]
```

#### **Portafolio** (Archivo: `src/app/portfolio/page.tsx`)
```typescript
// Líneas 20-40: Tus proyectos reales
const projects = [
  {
    title: 'E-commerce Fashion Store',           // ← NOMBRE DE TU PROYECTO
    description: 'Tienda online completa...',    // ← DESCRIPCIÓN DE TU PROYECTO
    images: ['/placeholder-web-1.jpg'],          // ← IMÁGENES DE TU PROYECTO
    client: 'Moda Estilo',                       // ← NOMBRE DE TU CLIENTE
    features: ['Diseño responsive', ...],        // ← CARACTERÍSTICAS DE TU PROYECTO
  }
]
```

### 5. **Testimonios** (Archivo: `src/app/portfolio/page.tsx`)
```typescript
// Líneas 120-135: Testimonios reales
const testimonials = [
  {
    name: 'Laura Martínez',              // ← NOMBRE REAL DEL CLIENTE
    company: 'Moda Estilo',              // ← EMPRESA REAL
    quote: 'El sitio web que nos crearon...', // ← COMENTARIO REAL
  }
]
```

## 🎨 **Personalización de Diseño** (Opcional)

### **Colores de Marca** (Archivo: `src/tailwind.config.ts`)
```typescript
// Líneas 10-25: Cambia estos colores por los de tu marca
colors: {
  primary: {
    500: '#f59e0b',  // ← COLOR PRINCIPAL (naranja actual)
  },
  secondary: {
    500: '#0ea5e9',  // ← COLOR SECUNDARIO (azul actual)
  },
}
```

### **Tipografía** (Archivo: `src/tailwind.config.ts`)
```typescript
// Línea 45: Cambia la fuente
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'], // ← CAMBIA 'Inter' POR TU FUENTE
}
```

## 📁 **Estructura de Carpetas para Imágenes**

Crea esta estructura en la carpeta `public/`:

```
public/
├── images/
│   ├── projects/
│   │   ├── web-design/
│   │   │   ├── proyecto-1.jpg
│   │   │   ├── proyecto-2.jpg
│   │   │   └── proyecto-3.jpg
│   │   └── erp-system/
│   │       ├── erp-1.jpg
│   │       ├── erp-2.jpg
│   │       └── erp-3.jpg
│   ├── team/
│   │   ├── juan-perez.jpg
│   │   ├── maria-gomez.jpg
│   │   └── carlos-rodriguez.jpg
│   └── logo.png
└── favicon.ico
```

## 🚀 **Pasos para Modificar tu Contenido**

1. **Copia tus imágenes** a las carpetas correspondientes en `public/images/`
2. **Actualiza las rutas** de las imágenes en los archivos de código
3. **Cambia el texto** en los archivos según tus necesidades
4. **Prueba el sitio** con `npm run dev`
5. **Ajusta colores** si es necesario en `tailwind.config.ts`

## ⚡ **Modificación Rápida - Checklist**

- [ ] Cambiar información de contacto en Footer.tsx
- [ ] Actualizar metadatos en layout.tsx
- [ ] Reemplazar imágenes de slideshow en services/page.tsx
- [ ] Actualizar proyectos en portfolio/page.tsx
- [ ] Cambiar testimonios en portfolio/page.tsx
- [ ] Probar el sitio con `npm run dev`
- [ ] Ajustar colores de marca en tailwind.config.ts (opcional)

## 📞 **Conectar el Formulario de Contacto**

Para que el formulario funcione, necesitas:

1. **Crear un backend** (puede ser con Node.js, Python, PHP, etc.)
2. **Modificar el handleSubmit** en `src/app/contact/page.tsx`
3. **Cambiar la URL** del endpoint donde se envían los datos

```typescript
// En src/app/contact/page.tsx, línea 45
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Cambia esta URL por tu endpoint real
  const response = await fetch('https://tu-backend.com/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  // ... resto del código
}
```

## 🎯 **Resumen de Tiempo Estimado**

- **Información básica**: 10 minutos
- **Imágenes y contenido**: 30 minutos
- **Personalización de diseño**: 15 minutos
- **Pruebas y ajustes**: 10 minutos

**Total estimado**: 1 hora

---

**¡Listo!** Con esta guía, puedes personalizar completamente tu sitio web en menos de una hora. ¿Tienes alguna duda sobre algún paso en particular?