# 🚀 Cómo Correr el Proyecto - Guía Paso a Paso

## 📋 Requisitos Previos

### 1. **Node.js** (Versión 18 o superior)
- **Descargar**: https://nodejs.org/
- **Verificar instalación**:
  ```bash
  node --version  # Debe mostrar v18.x o superior
  npm --version   # Debe mostrar 9.x o superior
  ```

### 2. **Git** (Opcional, para clonar)
- **Descargar**: https://git-scm.com/
- **Verificar instalación**:
  ```bash
  git --version
  ```

## 🛠️ Pasos para Ejecutar el Proyecto

### Paso 1: **Ubícate en la carpeta del proyecto**
```bash
cd pagina-web-demo
```

### Paso 2: **Instalar dependencias**
```bash
npm install
```
**⚠️ Posibles errores y soluciones:**
- **Error de permisos**: Ejecuta PowerShell/CMD como Administrador
- **Error de red**: Verifica tu conexión a internet
- **Error de caché**: `npm cache clean --force`

### Paso 3: **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

### Paso 4: **Abrir en tu navegador**
- Ve a: http://localhost:3000
- El sitio se recargará automáticamente al hacer cambios

## 📱 Comandos Útiles

```bash
npm run dev     # Inicia el servidor de desarrollo
npm run build   # Construye para producción
npm run start   # Inicia el servidor de producción
npm run lint    # Ejecuta el linter
npm run type-check  # Verifica tipos TypeScript
```

## 🔧 Solución de Problemas Comunes

### **Problema 1: "npm run dev" no funciona**
```bash
# Solución 1: Verifica Node.js
node --version

# Solución 2: Reinstala dependencias
rm -rf node_modules package-lock.json
npm install

# Solución 3: Usa npx
npx next dev
```

### **Problema 2: Errores de TypeScript**
```bash
# Solución: Verifica tipos
npx tsc --noEmit

# Solución: Instala tipos faltantes
npm install --save-dev @types/node @types/react
```

### **Problema 3: Errores de Tailwind**
```bash
# Solución: Verifica configuración
# Revisa src/tailwind.config.ts
# Asegúrate de que las rutas en content sean correctas
```

### **Problema 4: Puerto ocupado**
```bash
# Solución: Cambia el puerto
npm run dev -- -p 3001
# El sitio se abrirá en http://localhost:3001
```

### **Problema 5: Errores de dependencias**
```bash
# Solución: Limpia caché y reinstala
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🌐 Despliegue en Producción

### **Opción 1: Vercel (Recomendada)**
```bash
# 1. Instala Vercel CLI
npm install -g vercel

# 2. Inicia sesión
vercel login

# 3. Despliega
vercel

# 4. Producción
vercel --prod
```

### **Opción 2: Netlify**
```bash
# 1. Construye el proyecto
npm run build

# 2. Sube la carpeta /out a Netlify
# 3. Configura las variables de entorno si las necesitas
```

### **Opción 3: GitHub Pages**
```bash
# 1. Instala gh-pages
npm install --save-dev gh-pages

# 2. Agrega a package.json
"scripts": {
  "build": "next build && next export",
  "deploy": "gh-pages -d out"
}

# 3. Despliega
npm run deploy
```

## 📁 Estructura de Carpetas Clave

```
pagina-web-demo/
├── src/
│   ├── app/              # Páginas del sitio
│   ├── components/       # Componentes reutilizables
│   └── styles/          # Estilos globales
├── public/              # Archivos estáticos (imágenes, favicon)
├── package.json         # Dependencias y scripts
├── next.config.ts       # Configuración de Next.js
└── tailwind.config.ts   # Configuración de Tailwind
```

## 🎯 Flujo de Trabajo Recomendado

1. **Inicia el proyecto**: `npm run dev`
2. **Edita tus archivos** en `src/`
3. **Guarda los cambios** (el sitio se recarga automáticamente)
4. **Prueba en diferentes dispositivos** (responsive)
5. **Corrige errores** que aparezcan en la consola
6. **Construye para producción**: `npm run build`
7. **Despliega** en tu plataforma preferida

## 📞 Soporte

### **Errores Comunes**
- **"Cannot find module"**: Reinstala dependencias
- **"Port already in use"**: Cambia el puerto o cierra procesos
- **"TypeScript errors"**: Verifica tipos y sintaxis
- **"Tailwind classes not working"**: Revisa configuración

### **Recursos Útiles**
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs

---

**¡Listo!** Con estos pasos, deberías poder correr tu proyecto sin problemas. Si tienes algún error específico, consulta la sección de solución de problemas o busca en la documentación oficial.