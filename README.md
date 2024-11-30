# 1. Información básica del proyecto

## E-commerce Aesthetic Arc

Es una aplicación web que simula un sitio web de comercio electronico (E-commerce) de prendas de vestir.

# 2. Descripción

En el desarrollo del proyecto, se ha implementado inicialmente la funcionalidad que permite a los usuarios crear una cuenta o registrarse en la plataforma en caso de no tener una cuenta previa. Una vez que el usuario ha iniciado sesión (Log In), se le presenta una grilla de productos almacenados en la base de datos de MongoDB Atlas. Esta grilla muestra una imagen del producto, su nombre y precio. Además, cada producto incluye un botón con un ícono de carrito de compras, que, aunque actualmente no tiene funcionalidad, está destinado a agregar el producto al "carrito de compras" en el futuro. Finalmente, el usuario dispone de un botón para cerrar sesión (Log Out). El objetivo de este proyecto es poner en práctica los conocimientos adquiridos durante el módulo de "Lenguaje de Programación I".

# 3. Instalación

Aquí tienes una versión corregida y mejorada:

Para utilizar el proyecto, primero es necesario comprender la estructura de carpetas. La carpeta principal del proyecto se llama "ecommerce", y dentro de ella se encuentran dos subcarpetas: "be" y "fe", que contienen respectivamente el backend y el frontend.

El proyecto sigue el modelo de arquitectura MERN (MongoDB, Express, React, Node.js). En el backend, se utiliza Node.js como entorno de ejecución de JavaScript, y Express.js para simplificar la creación de rutas, middleware y controladores para el manejo de solicitudes HTTP. Para la persistencia de datos, se emplean dos bases de datos: PostgreSQL, un sistema de base de datos relacional para gestionar usuarios, y MongoDB Atlas, una base de datos no relacional para la gestión de productos.

En el frontend, React.js se encarga de renderizar la vista en el navegador y gestionar el estado de la interfaz de usuario.

### En resumen:

Frontend: React.js

Backend: Node.js + Express.js (lógica del servidor) + MongoDB y PostgreSQL (almacenamiento de datos)

### Ejecución Backend:

1. Abra una terminal dentro de la carpeta "ecommerce".

2. Ejecute el siguiente comando:

### `cd be/`

3. Instalar las dependencias:

### `npm install`

4. Iniciar el servidor:

### `node servidor.js` o para recargar automaticamente `npx nodemon servidor.js`

5. Previamente asegúrese de tener las herramientas necesarias como Node.js y npm.

### `node -v` y `npm -v`

### Ejecución Frontend:

1. Abra una terminal dentro de la carpeta "ecommerce".

2. Ejecute el siguiente comando:

### `cd fe/`

3. Instalar las dependencias:

### `npm install`

4. Iniciar el servidor:

### `npm start`

5. Configuración adicional (si es necesario)

- Archivo .env: Asegúrate de que las variables en el archivo .env estén correctamente configuradas (por ejemplo, URL de la API del backend).

- Tailwind CSS: Este proyecto incluye configuración para Tailwind (tailwind.config.js). Verifica que Tailwind esté funcionando correctamente al iniciar el servidor de desarrollo.
