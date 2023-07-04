# COVID-TRACKER

Este proyecto es una réplica de la web del Coronavirus, desarrollado en React. Se conecta a una API para obtener los datos de forma dinámica. A continuación, se muestra una descripción del proyecto y algunas partes del código.

## Descripción

El objetivo de este proyecto es recrear la web del Coronavirus, brindando información actualizada sobre los casos de COVID-19 en diferentes países. Utiliza React como framework principal para la construcción de la interfaz de usuario y establece una conexión con la API "https://disease.sh/" para obtener los datos en tiempo real.

## Participantes

- Soledad Grobas
- Beatriz Cano
- Yolanda Zahonero
- Anais Rodriguez
- Amaia Abaroa

## Estructura del proyecto

El proyecto se organiza en diferentes componentes y archivos. A continuación, se describen algunas partes importantes del código:

### Pages

- **Landingpage**: Este componente representa la página de inicio de la aplicación. Importa el componente `HeaderLandingPage` y lo muestra en la página principal.

- **Tracker 3**: Este componente representa una página de seguimiento de datos del Coronavirus. Incluye el componente `Navbar`, `GlobalTopTenColumn` y `TableTracker3`, que muestran diferentes secciones de la página.

### Configuration

- **Router.jsx**: Este archivo configura las rutas de la aplicación utilizando React Router. Se definen las rutas para la página de inicio, `Tracker2` y `Tracker3`, y se asigna el componente correspondiente a cada ruta.

### Consumo de la API

- **Services**
  - **UseFetch.jsx**: Este archivo contiene un hook personalizado llamado `UseFetch`. Este hook se utiliza para realizar una solicitud a la API y obtener los datos necesarios. Utiliza el estado `data` para almacenar la respuesta de la API y se devuelve como resultado del hook.

## Estado actual del proyecto

El proyecto aún está en construcción. La rama `feature/Tracker2` se encuentra en proceso de construcción, con el servicio de la API ya creado, así como las cards con los datos y el mapa. Falta darle estilos y vincular los datos del mapa con las cards y el dropdown.

## Instalación y configuración

Para ejecutar el proyecto de forma local, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:
      #### npm install --force
4. Después de que se completen las instalaciones, puedes iniciar la aplicación con el siguiente comando:
      #### npm run dev
5. La aplicación se abrirá en tu navegador predeterminado en la dirección `http://localhost:3000`.

Recuerda que es posible que necesites configurar una conexión a la API para obtener los datos de forma dinámica. Asegúrate de proporcionar la URL correcta en el código que realiza la llamada a la API.

¡Disfruta explorando la réplica de la web del Coronavirus!

**Nota:** Asegúrate de tener instalado Node.js y npm (Node Package Manager) en tu máquina antes de seguir los pasos de instalación.
