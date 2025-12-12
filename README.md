# 📝 App Tareas - Gestor de Tareas

Bienvenido a **App Task**, una aplicación moderna y eficiente para la gestión de tareas, desarrollada como parte de una prueba técnica de CrediSeguros. Este proyecto demuestra la implementación de buenas prácticas de desarrollo, arquitectura limpia y el uso de tecnologías de vanguardia en el ecosistema de React.

## 🚀 Descripción del Proyecto

App Task es una **Single Page Application (SPA)** que permite a los usuarios gestionar sus tareas diarias de manera intuitiva. La aplicación ofrece funcionalidades completas de **CRUD** (Crear, Leer, Actualizar, Eliminar), filtrado de estados y una interfaz de usuario responsiva y amigable.

El objetivo principal de este proyecto es demostrar competencias en:

- **Arquitectura de componentes** escalable y mantenible.
- **Gestión de estado asíncrono** eficiente con React Query.
- **Validación de formularios** robusta.
- **Estilizado moderno** con Tailwind CSS.
- **Integración con API REST** mediante una capa de servicios desacoplada.

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las siguientes tecnologías y librerías clave:

### Core

- **[React](https://react.dev/) (v19)**: Biblioteca principal para la construcción de interfaces de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático para un código más robusto y seguro.
- **[Vite](https://vitejs.dev/)**: Herramienta de construcción (bundler) de próxima generación, rápida y ligera.

### Estado y Datos

- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Para la gestión eficiente del estado del servidor, caché y sincronización de datos.
- **[Axios](https://axios-http.com/)**: Cliente HTTP basado en promesas para realizar peticiones a la API.

### UI y Estilos

- **[Tailwind CSS](https://tailwindcss.com/) (v4)**: Framework de utilidades para un diseño rápido y responsivo.
- **[Lucide React](https://lucide.dev/)**: Librería de iconos ligera y moderna.
- **[React Hot Toast](https://react-hot-toast.com/)**: Notificaciones toast elegantes y personalizables para feedback al usuario.

### Formularios y Validación

- **[React Hook Form](https://react-hook-form.com/)**: Manejo de formularios performante y flexible.
- **[Zod](https://zod.dev/)**: Esquemas de validación TypeScript-first para asegurar la integridad de los datos ingresados.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar la escalabilidad y el mantenimiento:

```
src/
├── api/              # Capa de comunicación con el backend
│   ├── queries/      # Hooks de React Query para obtener datos (GET)
│   ├── mutations/    # Hooks de React Query para modificar datos (POST, PUT, DELETE)
│   ├── requests/     # Funciones directas de llamada a la API con Axios
│   └── axios.ts      # Configuración de la instancia de Axios
├── components/       # Componentes de UI reutilizables (TaskList, TaskForm, etc.)
├── interfaces/       # Definiciones de tipos e interfaces TypeScript
├── main.tsx          # Punto de entrada de la aplicación
└── App.tsx           # Componente raíz y layout principal
```

## ✨ Funcionalidades Principales

1.  **Gestión de Tareas**:

    - Crear nuevas tareas con título y descripción.
    - Marcar tareas como completadas o pendientes.
    - Editar tareas existentes (título y descripción).
    - Eliminar tareas.

2.  **Filtrado y Visualización**:

    - Filtrar tareas por estado: **Todas**, **Completadas**, **Pendientes**.
    - Indicadores visuales de carga (skeletons/spinners) y estados vacíos.

3.  **Experiencia de Usuario (UX)**:
    - Validaciones en tiempo real en formularios.
    - Notificaciones (Toasts) para confirmar acciones (éxito/error).
    - Diseño totalmente **responsivo** adaptado a dispositivos móviles y escritorio.

## 🔧 Instalación y Ejecución Local

Sigue estos pasos para correr el proyecto en tu entorno local:

### Prerrequisitos

- **Node.js**: Asegúrate de tener instalado Node.js (v18 o superior).
- **pnpm** (recomendado) o npm/yarn.

### Pasos

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/Yosipmikecolin/app-task-frontend.git
    cd app-task
    ```

2.  **Instalar dependencias**:

    ```bash
    pnpm install
    ```

3.  **Configurar Variables de Entorno**:
    Crea un archivo `.env` en la raíz del proyecto.

    ```env
     VITE_API_URL=http://localhost:3000
    ```

    Si deseas correr el backend en local

    ```env
      VITE_API_URL=https://app-task-backend-production.up.railway.app
    ```

    Si deseas probar de una vez sin correr el backend

4.  **Ejecutar el servidor de desarrollo**:

    ```bash
    pnpm run dev
    ```

5.  **Abrir en el navegador**:
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).

## ☁️ Frontend Desplegado

Si deseas probar la apliación de tareas sin tener que clonar el Frotend y Backend, lo puedes hacer en el siguiente enlace

https://app-task-frontend.vercel.app/

## 🧪 Notas Adicionales

- **Linting**: El proyecto incluye configuración de ESLint para mantener la calidad del código. Ejecuta `pnpm lint` para verificar.
- **Build**: Para generar la versión de producción, ejecuta `pnpm build`.

---
