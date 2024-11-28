# 1. Información básica del proyecto

## E-commerce Aesthectic Arc

Es una aplicación web que simula un sitio web de comercio electronico (E-commerce) de prendas de vestir.

# 2. Descripción

En el desarrollo del proyecto, se ha implementado inicialmente la funcionalidad que permite a los usuarios crear una cuenta o registrarse en la plataforma en caso de no tener una cuenta previa. Una vez que el usuario ha iniciado sesión (Log In), se le presenta una grilla de productos almacenados en la base de datos de MongoDB Atlas. Esta grilla muestra una imagen del producto, su nombre y precio. Además, cada producto incluye un botón con un ícono de carrito de compras, que, aunque actualmente no tiene funcionalidad, está destinado a agregar el producto al "carrito de compras" en el futuro. Finalmente, el usuario dispone de un botón para cerrar sesión (Log Out). El objetivo de este proyecto es poner en práctica los conocimientos adquiridos durante el módulo de "Lenguaje de Programación I".

# 3. Instalación

Para hacer uso del proyecto primero se debe entender la estructuración de carpetas y basicamente la carpeta raiz del proyecto es la carpeta llamada "ecommerce" dentro se alojan 2 subcarpetas con el nombre de "be" y "fe" donde se alojan el backend y el frontend respectivamente. Para el desarrollo del proyecto se uso como modelo el estack MERN por lo cual para la parte del backend o servidor se uso Node.js como entorno de ejecución de JavaScript, Express.js para la simplificar la creación de rutas, middleware y controladores para el manejo de solicitudes HTTP. Para la persitencia de los datos se uso el modelo relacional con PostgreSQL para la gestión de usuarios y para la gestión de productos se uso un modelo No relacional MongoDB Atlas. Y para renderizar la vista en el navegador y gestionar el estado de la interfaz se uso React.js.

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
