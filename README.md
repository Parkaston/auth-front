# 🌐 Frontend - Aplicación de Autenticación

🔗 **Aplicación en vivo**: [https://auth-front-o8kh.onrender.com/](https://auth-front-o8kh.onrender.com/)

👉 Esta interfaz permite registrar, iniciar sesión, cerrar sesión y editar el perfil de un usuario autenticado. Funciona junto al backend desplegado en Render.

---

## 🔁 Repos relacionados

- **Frontend GitHub**: [https://github.com/Parkaston/auth-front](https://github.com/Parkaston/auth-front)
- **Backend GitHub**: [https://github.com/Parkaston/auth-backend](https://github.com/Parkaston/auth-backend)
- **Backend desplegado**: [https://auth-backend-14z7.onrender.com/](https://auth-backend-14z7.onrender.com/)

---

## ⚙️ Tecnologías utilizadas

- React + Vite
- React Router DOM
- Material UI
- JWT para autenticación
- Vercel/Render para despliegue

---

## 📦 Instalación local

1. Clona el repositorio:

```bash
git clone https://github.com/Parkaston/auth-front.git
cd auth-front
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con:

```
VITE_API_BASE_URL=https://auth-backend-14z7.onrender.com/api
```

4. Ejecuta la app:

```bash
npm run dev
```

---

## 🔐 Funcionalidades

- Registro de usuario
- Inicio de sesión
- Logout
- Visualización de perfil
- Edición de nombre, email y descripción
- Rutas protegidas (solo accesibles con login)
- Navbar dinámico (cambia según autenticación)

---

## 🧪 Testeo manual con el Backend

Este frontend está conectado al backend desplegado en:

📡 `https://auth-backend-14z7.onrender.com/api`

El backend soporta las siguientes rutas:

- `POST /register`: Crear usuario
- `POST /login`: Obtener token
- `GET /profile`: Obtener perfil autenticado (requiere JWT)
- `PUT /profile`: Actualizar perfil (requiere JWT)

Se puede probar toda la funcionalidad usando directamente la app desplegada aquí:

✅ **[https://auth-front-o8kh.onrender.com/](https://auth-front-o8kh.onrender.com/)**

---

## 🧾 Licencia

Proyecto realizado como entrega final para Escuela Musk por Guillermo Luna Álvarez.

