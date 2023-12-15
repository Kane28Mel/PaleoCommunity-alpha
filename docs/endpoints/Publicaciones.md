# Publicaciones

## Endpoint: `GET /Publicaciones/`

Este endpoint permite obtener la lista completa de publicaciones.
### Ejemplo de Solicitud
```http
GET /Publicaciones
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_publicacion": 1,
  "contenido": "khhujikhjkhjj",
  "fecha": "2023/12/12",
  "fk_id_usuario": 1,
  "votos": "1",
  "fk_id_foro": 3
},
....
```

### Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el sitio."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Endpoint: `GET /Publicaciones/{id}`

Este endpoint permite obtener información detallada de una publicación específica.
### Parámetros de URL
`{id}` - Identificador único de la publicación.
### Ejemplo de Solicitud
```http
GET /Publicaciones/2
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_publicacion": 1,
  "contenido": "khhujikhjkhjj",
  "fecha": "2023/12/12",
  "fk_id_usuario": 1,
  "votos": "1",
  "fk_id_foro": 3
}
```

### Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el sitio."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
## Endpoint: `POST /Publicaciones`

Este endpoint permite agregar una nueva publicación al sistema.


### Ejemplo de Solicitud
```http
POST /Publicaciones
```
```json
{
  "contenido": "khhujikhjkhjj",
  "fecha": "2023/12/12",
  "fk_id_usuario": 1,
  "votos": "1",
  "fk_id_foro": 3
}
```

### Respuesta Exitosa (Código 201 Created)
```json
{
    "status": 201,
    "message": "Created"
}
```

### Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el sitio."
  }
- Código 400 Bad Request:

  ```json
  {
      "errno": 400,
      "error": "Bad Request"
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
## Endpoint: `PUT /Publicaciones{id}`

Este endpoint permite actualizar la información de una publicación existente.
### Parámetros de URL
`{id}` - Identificador único de la publicación a actualizar.

### Ejemplo de Solicitud
```http
PUT /Publicaciones/2
```
```json
{
    "contenido": "khhujikhjkhjj",
    "fecha": "2023/12/12",
    "fk_id_usuario": 1,
    "votos": "1",
    "fk_id_foro": 3
}
```

### Respuesta Exitosa (200 OK)
```json
{
    "message": "Updated successfully"
}
```

### Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el sitio."
  }
- Código 400 Bad Request:

  ```json
  {
      "errno": 400,
      "error": "Bad Request"
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
## Endpoint: `PATHC /Publicaciones{id}`

Este endpoint permite realizar modificaciones parciales en la información de una publicación existente.
### Parámetros de URL
`{id}` - Identificador único de la publicación a actualizar.

### Ejemplo de Solicitud
```http
PATHC /Publicaciones/2
```
```json
{
  "contenido": "khhujikhjkhjj",
  "fecha": "2023/12/12",
  "fk_id_usuario": 1,
  "votos": "1",
  "fk_id_foro": 3
}
```

### Respuesta Exitosa (200 OK)
```json
{
    "message": "Updated successfully"
}
```

### Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el sitio."
  }
- Código 400 Bad Request:

  ```json
  {
      "errno": 400,
      "error": "Bad Request"
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 
