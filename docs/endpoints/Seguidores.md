# Seguidores

## Endpoint: `GET /Seguidores/`

Este endpoint permite obtener la lista completa de seguidores.
### Ejemplo de Solicitud
```http
GET /Seguidores
```

### Respuesta Exitosa (Código 200 OK)
```json
 {
  "id_seguidor": 1,
  "fk_id_usuario_seguidor": 1,
  "fk_id_usuario_seguido": 1,
  "fecha_seguimiento": "2023-12-12T00:00:00.000Z"
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

## Endpoint: `GET /Seguidores/{id}`

Este endpoint permite obtener información detallada de un seguidor específico.
### Parámetros de URL
`{id}` - Identificador único del seguidor.
### Ejemplo de Solicitud
```http
GET /Seguidores/2
```

### Respuesta Exitosa (Código 200 OK)
```json
 {
  "id_seguidor": 1,
  "fk_id_usuario_seguidor": 1,
  "fk_id_usuario_seguido": 1,
  "fecha_seguimiento": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `POST /Seguidores`

Este endpoint permite agregar un nuevo seguidor al sistema.

### Ejemplo de Solicitud
```http
POST /Seguidores
```
```json
{
  "fk_id_usuario_seguidor": 1,
  "fk_id_usuario_seguido": 1,
  "fecha_seguimiento": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `PUT /Seguidores{id}`

Este endpoint permite actualizar la información de un seguidor existente.
### Parámetros de URL
`{id}` - Identificador único del seguidor a actualizar.

### Ejemplo de Solicitud
```http
PUT /Seguidores/2
```
```json
{
  "fk_id_usuario_seguidor": 1,
  "fk_id_usuario_seguido": 1,
  "fecha_seguimiento": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `PATHC /Seguidores{id}`

Este endpoint permite realizar modificaciones parciales en la información de un seguidor existente.
### Parámetros de URL
`{id}`  - Identificador único del seguidor a actualizar.

### Ejemplo de Solicitud
```http
PATHC /Seguidores/2
```
```json
{
  "fk_id_usuario_seguidor": 1,
  "fk_id_usuario_seguido": 1,
  "fecha_seguimiento": "2023-12-12T00:00:00.000Z"
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
