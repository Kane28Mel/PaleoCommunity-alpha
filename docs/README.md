# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista
de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                           | Descripción                                   |
| --------------------------------- | --------------------------------------------- |
| Usuarios                           | |
| [`GET /usuarios`](./endpoints/Usuarios.md#endpoint-get-usuarios)               | Obtiene una lista de todos los usuarios en el sistema.            |
| [`GET /usuarios/{id}`](./endpoints/Usuarios.md#endpoint-get-usuariosid)          | Obtiene detalles específicos de un usuario según su ID.           |
| [`POST /usuarios`](./endpoints/Usuarios.md#endpoint-post-usuarios)              | Crea un nuevo usuario en el sistema.                              |
| [`PUT /usuarios/{id}`](./endpoints/Usuarios.md#endpoint-put-usuariosid)          | Reemplaza completamente la información de un usuario existente.   |
| [`PATCH /usuarios/{id}`](./endpoints/Usuarios.md#endpoint-pathc-usuariosid)        | Actualiza parcialmente la información de un usuario existente.    |
| Seguidores                         |                  |
| [`GET /seguidores`](./endpoints/Seguidores.md#endpoint-get-seguidores)             | Obtiene la lista de todos los seguidores en el sistema.           |
| [`GET /seguidores/{id}`](./endpoints/Seguidores.md#endpoint-get-seguidoresid)        | Obtiene detalles específicos de un seguidor según su ID.          |
| [`POST /seguidores`](./endpoints/Seguidores.md#endpoint-post-seguidores)            | Crea una nueva relación de seguidor en el sistema.                 |
| [`PUT /seguidores/{id}`](./endpoints/Seguidores.md#endpoint-put-seguidoresid)        | Reemplaza completamente la información de la relación de seguidor existente.   |
| [`PATCH /seguidores/{id}`](./endpoints/Seguidores.md#endpoint-patch-seguidoresid)      | Actualiza parcialmente la información de la relación de seguidor existente.       |
| Categorias                         |  |
| [`GET /categorias`](./endpoints/Categorias.md#endpoint-get-categorias)             | Obtiene la lista de todas las categorías en el sistema.           |
| [`GET /categorias/{id}`](./endpoints/Categorias.md#endpoint-get-categoriasid)        | Obtiene detalles específicos de una categoría según su ID.       |
| [`POST /categorias`](./endpoints/Categorias.md#endpoint-post-categorias)            | Crea una nueva categoría en el sistema.                             |
| [`PUT /categorias/{id}`](./endpoints/Categorias.md#endpoint-put-categoriasid)        | Reemplaza completamente la información de una categoría existente.|
| [`PATCH /categorias/{id}`](./endpoints/Categorias.md#endpoint-patch-categoriasid)      | Actualiza parcialmente la información de una categoría existente.|
| Publicaciones                      |                                    |
| [`GET /publicaciones`](./endpoints/Publicaciones.md#endpoint-get-publicaciones)          | Obtiene la lista de todas las publicaciones en el sistema.           |
| [`GET /publicaciones/{id}`](./endpoints/Publicaciones.md#endpoint-get-publicacionesid)     | Obtiene detalles específicos de una publicación según su ID.       |
| [`POST /publicaciones`](./endpoints/Publicaciones.md#endpoint-post-publicaciones)         | Crea una nueva publicación en el sistema.                             |
| [`PUT /publicaciones/{id}`](./endpoints/Publicaciones.md#endpoint-put-publicacionesid)     | Reemplaza completamente la información de una publicación existente.|
| [`PATCH /publicaciones/{id}`](./endpoints/Publicaciones.md#endpoint-pathc-publicacionesid)   | Actualiza parcialmente la información de una publicación existente.|
| Notificaciones                     |                                    |
| [`GET /notificaciones`](./endpoints/Notificaciones.md#endpoint-get-notificaciones)         | Obtiene la lista de todas las notificaciones en el sistema.           |
| [`POST /notificaciones`](./endpoints/Notificaciones.md#endpoint-post-notificaciones)        | Crea una nueva notificación en el sistema.                             |
| Foros                              |                                    |
| [`GET /foros`](./endpoints/foros.md#endpoint-get-foros)                  | Obtiene la lista de todos los foros en el sistema.           |
| [`GET /foros/{id}`](./endpoints/foros.md#endpoint-get-forosid)             | Obtiene detalles específicos de un foro según su ID.       |
| [`POST /foros`](./endpoints/foros.md#endpoint-post-foros)                 | Crea un nuevo foro en el sistema.                             |
| [`PUT /foros/{id}`](./endpoints/foros.md#endpoint-put-forosid)             | Reemplaza completamente la información de un foro existente.|
| [`PATCH /foros/{id}`](./endpoints/foros.md#endpoint-pathc-forosid)           | Actualiza parcialmente la información de un foro existente.|
                          
