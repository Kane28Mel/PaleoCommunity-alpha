# Usuarios

## Endpoint: `GET /Usuarios/`

Este endpoint permite obtener la lista completa de usuarios registrados en el sistema.
### Ejemplo de Solicitud
```http
GET /Usuarios
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_foro": 2,
  "nombre": "Miranda",
  "email": "miri@contraseña",
  "foto": "FOTO",
  "info": "Fan",
  "actividad": "Publicacion",
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

## Endpoint: `GET /Usuarios/{id}`

Este endpoint permite obtener información detallada de un usuario específico.
### Parámetros de URL
`{id}` - Identificador único del usuario.

### Ejemplo de Solicitud
```http
GET /Usuarios/2
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_foro": 2,
  "nombre": "Miranda",
  "email": "miri@contraseña",
  "foto": "FOTO",
  "info": "Fan",
  "actividad": "Publicacion",
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
## Endpoint: `POST /Usuarios`

Este endpoint permite agregar un nuevo usuario al sistema.

### Ejemplo de Solicitud
```http
POST /Usuarios
```
```json
{
  "nombre": "Miranda",
  "email": "miri@contraseña",
  "foto": "FOTO",
  "info": "Fan",
  "actividad": "Publicacion",
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
## Endpoint: `PUT /Usuarios{id}`

Este endpoint permite actualizar la información de un usuario existente.
### Parámetros de URL
`{id}`- Identificador único del usuario a actualizar.

### Ejemplo de Solicitud
```http
PUT /Usuarios/2
```
```json
{
  "nombre": "Miranda",
  "email": "miri@contraseña",
  "foto": "FOTO",
  "info": "Fan",
  "actividad": "Publicacion",
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
## Endpoint: `PATHC /Usuarios{id}`

Este endpoint permite realizar modificaciones parciales en la información de un usuario existente.
### Parámetros de URL
`{id}` - Identificador único del usuario a actualizar.

### Ejemplo de Solicitud
```http
PATHC /Usuarios/2
```
```json
{
  "nombre": "Miranda",
  "email": "miri@contraseña",
  "foto": "FOTO",
  "info": "Fan",
  "actividad": "Publicacion",
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
