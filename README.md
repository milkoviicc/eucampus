# EUCampus — Documentación del proyecto / Project Documentation

> **Sitio:** eucampus.com
> **Stack principal:** Next.js (App Router) + TypeScript + Tailwind CSS
> **Estado:** Frontend con Redux (gestión de auth), ESLint + Prettier, iconografía con FontAwesome y Lucide React, middleware para protección de rutas.

---

## Índice / Table of contents

1. Descripción corta / Short description
2. Instalación / Installation
3. Scripts disponibles / Available scripts
4. Estructura del proyecto / Project structure
5. Tecnologías / Technologies
6. Autenticación y estado / Auth & state
7. Middleware / Route guards
8. Componentes clave / Key components
9. Estilos y UI / Styling & UI
10. Linter / Formateo / Linter & formatting
11. Despliegue / Deployment
12. Contribuir / Contributing
13. Contacto / Contact

---

# 1. Descripción corta / Short description

**ES:**
EUCampus es una plataforma orientada a la preparación para empleos y procesos de selección en instituciones europeas. Contiene cursos, entrenamientos por competencias (razonamiento, competencias digitales, conocimientos de la UE), secciones informativas (trabajar-en-la-ue, FAQs, contacto) y una experiencia de usuario con área de login.

**EN:**
EUCampus is a platform focused on preparing candidates for jobs and selection processes within European institutions. It includes courses, competency trainings (reasoning, digital skills, EU knowledge), informative sections (work-in-the-eu, FAQs, contact) and a user experience with authentication.

---

# 2. Instalación / Installation

**Requisitos / Requirements**
- Node.js (LTS recommended)
- npm o yarn

**Comandos / Commands**

```bash
# instalar dependencias
npm install
# o
# yarn

# dev
npm run dev

# build & start
npm run build
npm run start
```

---

# 3. Scripts disponibles / Available scripts

- `dev` — Ejecuta la app en modo desarrollo.
- `build` — Construye la aplicación para producción.
- `start` — Inicia la versión de producción.
- `lint` — Ejecuta ESLint.
- `format` — Ejecuta Prettier (si está configurado como script).

(Ajustar según `package.json` real.)

---

# 4. Estructura del proyecto / Project structure

A continuación un ejemplo simplificado basado en la estructura del repo:

```
app/
  (main)/
    cursos/
    entrenamientos-conocimientos-ue/
    trabajar-en-la-ue/
    contacto/
    ...
components/
  AnimatedHeading.tsx
  Breadcrumb.tsx
  Navbar.tsx
  Footer.tsx
  ...
lib/
  actions/sendMail.tsx
  cookies.ts
  utils.ts
login/
  page.tsx
providers/
  Providers.tsx
redux/
  features/authSlice.ts
  hooks.ts
  store.ts
public/
globals.css
middleware.ts
.eslintrc.js
.prettierrc
package.json
```

**Notas:**
- Las rutas usan el App Router de Next.js (carpetas `page.tsx` y `layout.tsx`).
- `middleware.ts` contiene la lógica de guardado/redirección previa a la navegación.

---

# 5. Tecnologías / Technologies

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Redux Toolkit (store, slices)
- FontAwesome (mayoría de iconos)
- Lucide React (algunos iconos)
- ESLint + Prettier
- Herramientas auxiliares en `lib/` (utils, cookies, acciones)

---

# 6. Autenticación y estado / Auth & state

**ES:**
La autenticación y el estado global se gestionan con Redux (slice `authSlice.ts`). El `Providers.tsx` o el layout raíz envuelve la aplicación con el proveedor de Redux para exponer `useAppSelector` y `useAppDispatch`. El token y los datos del usuario pueden almacenarse en localStorage o en memoria dependiendo de la implementación.

**EN:**
Authentication and global state are managed with Redux (`authSlice.ts`). `Providers.tsx` (or the root layout) wraps the app with the Redux provider exposing `useAppSelector` and `useAppDispatch`. Tokens and user data may be persisted in localStorage or kept in memory depending on your implementation.

**Consejo / Tip:**
Si guardas tokens en localStorage considera proteger rutas sensibles en el backend y usar short-lived tokens + refresh tokens o validación por cookie si la seguridad lo requiere.

---

# 7. Middleware / Route guards

**ES:**
`middleware.ts` en la raíz de Next.js intercepta peticiones y permite redirigir o bloquear el acceso a rutas privadas (p. ej. /lms, /perfil). Implementa la lógica de comprobación del token/estado y la redirección según sea necesario.

**EN:**
`middleware.ts` at the project root intercepts requests and allows you to redirect or block access to private routes (e.g. /lms, /profile). Implement your token/state check here and redirect accordingly.

---

# 8. Componentes clave / Key components

- `Navbar.tsx` — navegación principal, controla estado de sesión y enlaces.
- `Footer.tsx` — información de contacto y enlaces útiles.
- `AnimatedHeading.tsx` — encabezados con animación para landing y secciones.
- `Breadcrumb.tsx` — ayuda a navegación jerárquica.
- `Courses.tsx` — lista de cursos, filtros y tarjetas.
- `UserMenu.tsx` — menú desplegable del usuario autenticado.

---

# 9. Estilos y UI / Styling & UI

- Tailwind CSS se usa para estilos utilitarios. Comprueba `globals.css` para resets y utilidades globales.
- Componentes reutilizables para secciones de landing y cards.
- Iconos: FontAwesome es la fuente principal; Lucide React se usa en casos puntuales.

---

# 10. Linter / Formateo / Linter & formatting

- ESLint configurado para Next.js + TypeScript (archivo `.eslintrc.js`).
- Prettier para formateo (archivo `.prettierrc`).
- Añade `lint` y `format` a `package.json` y configura hooks (husky) si quieres pre-commit checks.

---

# 11. Despliegue / Deployment

**Recomendación básica:**
- Vercel es la opción natural para Next.js — despliegue automático desde el repositorio.
- Asegúrate de configurar variables de entorno (API_URL, JWT secrets, etc.) en el proveedor.
- Si usas SSR/ISR o lógica server-side con llamadas a APIs privadas, configura correctamente las variables y dominios.

---

# 12. Contribuir / Contributing

1. Fork del repositorio
2. Crea una rama feature/issue-descripción
3. Ejecuta linters y tests localmente
4. Pull Request con descripción clara

Incluye tests y documentación para cambios grandes.

---

# 13. Contacto / Contact

**ES:**
Para dudas sobre el frontend, estructura o despliegue, contacta con el equipo responsable (detalles en la web). Si estás colaborando, usa issues y pull requests.

**EN:**
For frontend, structure or deployment questions, contact the responsible team (details on the website). If collaborating, use issues and pull requests.

---

*README generado automáticamente con base en la estructura de proyecto y el sitio público (eucampus.com). Ajusta los comandos y scripts a tu `package.json` y añade información sensible (API keys, procesos de CI/CD) en documentación privada.*

