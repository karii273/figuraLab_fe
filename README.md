FIGURALAB – FRONTEND

Aplicación web desarrollada en React que permite visualizar el catálogo de productos y administrar el sistema mediante un panel exclusivo para administradores.

Integrantes
- Karina Martínez
- Jacqueline Zamora

Descripción del Proyecto
- Este frontend forma parte del proyecto FiguraLab, una plataforma destinada a la administración de productos coleccionables y gestión de usuarios.

Incluye:
- Login
- Roles (admin / usuario)
- Mantenedor de productos
- Mantenedor de usuarios
- Catálogo público
- Consumo de API REST desde el backend

Tecnologías Usadas
- React 18
- React Router
- Bootstrap / CSS
- Fetch API / Axios
- LocalStorage para manejo de sesión

Instalación y Ejecución
1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/figuralab-frontend
2. Instalar dependencias
npm install
3. Ejecutar el proyecto
npm run dev
4. Abrir en el navegador:
http://localhost:5173

Conexión con Backend
- El frontend se conecta a la API del backend mediante la URL:
  - http://localhost:3000/api
- Todas las peticiones protegidas incluyen:
  - Authorization: Bearer <token>

Estructura del Proyecto
/src
  /components
  /views
  /hooks
  /services
  /context
  App.jsx
  main.jsx

Roles
- Admin: Accede a usuarios, productos y panel interno.
- Usuario: Solo catálogo.

Scripts disponibles
- npm run dev
- npm run build
- npm run preview

Proyecto desarrollado por:
- Karina Martínez
- Jacqueline Zamora