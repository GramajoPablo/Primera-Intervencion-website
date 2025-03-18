# Configuración de Sanity.io para Primera Intervención

Este documento explica cómo configurar y utilizar Sanity.io para gestionar el contenido del blog en el sitio web de Primera Intervención.

## Requisitos previos

- Node.js (versión 14.0 o superior)
- npm o yarn
- Una cuenta en [Sanity.io](https://www.sanity.io/)

## Pasos para configurar Sanity.io

### 1. Crear un proyecto en Sanity.io

1. Visita [Sanity.io](https://www.sanity.io/) y regístrate o inicia sesión
2. Crea un nuevo proyecto desde el dashboard
3. Anota el Project ID que te proporciona Sanity

### 2. Configurar las variables de entorno

1. Crea un archivo `.env.local` en la raíz del proyecto (puedes usar `.env.local.example` como plantilla)
2. Añade las siguientes variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   ```
3. Reemplaza `tu_project_id` con el ID de tu proyecto de Sanity

### 3. Iniciar el Sanity Studio

1. Ejecuta el servidor de desarrollo de Next.js:
   ```
   npm run dev
   ```
2. Navega a `http://localhost:3000/studio` en tu navegador
3. Sigue las instrucciones para configurar el Studio si es la primera vez

## Estructura de contenido

El blog de Primera Intervención utiliza los siguientes tipos de contenido:

### Post (Publicación)

- **Title**: Título de la publicación
- **Slug**: URL amigable generada a partir del título
- **Author**: Referencia al autor
- **Main Image**: Imagen principal de la publicación
- **Categories**: Categorías a las que pertenece la publicación
- **Published At**: Fecha de publicación
- **Description**: Breve descripción o extracto
- **Body**: Contenido principal en formato de bloques

### Author (Autor)

- **Name**: Nombre del autor
- **Slug**: URL amigable generada a partir del nombre
- **Image**: Foto del autor
- **Bio**: Biografía breve del autor

### Category (Categoría)

- **Title**: Nombre de la categoría
- **Description**: Descripción de la categoría

## Cómo crear contenido

### Para crear una nueva publicación:

1. Navega a `http://localhost:3000/studio`
2. Selecciona "Post" en el menú lateral
3. Haz clic en "Create new Post"
4. Completa los campos requeridos:
   - Título
   - Slug (generado automáticamente, pero puedes personalizarlo)
   - Autor (selecciona uno existente o crea uno nuevo)
   - Imagen principal
   - Categorías
   - Fecha de publicación
   - Descripción
   - Contenido (Body)
5. Haz clic en "Publish" para publicar la entrada

### Para crear un nuevo autor:

1. Navega a `http://localhost:3000/studio`
2. Selecciona "Author" en el menú lateral
3. Haz clic en "Create new Author"
4. Completa los campos requeridos
5. Haz clic en "Publish"

## Visualización en el sitio web

Una vez que hayas publicado contenido en Sanity:

1. Las publicaciones recientes aparecerán automáticamente en la sección de Blog de la página principal
2. Todas las publicaciones estarán disponibles en la página `/blog`
3. Cada publicación individual estará disponible en `/blog/[slug]`

## Solución de problemas

Si encuentras algún problema con la integración de Sanity:

1. Verifica que las variables de entorno estén correctamente configuradas
2. Asegúrate de que el Project ID sea correcto
3. Comprueba que el contenido esté publicado (no en borrador)
4. Revisa la consola del navegador para ver si hay errores

## Recursos adicionales

- [Documentación oficial de Sanity.io](https://www.sanity.io/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de Portable Text](https://www.sanity.io/docs/portable-text-editor-configuration)
