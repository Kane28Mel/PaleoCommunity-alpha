# Foros

## Endpoint: `GET /Foros/`

Este endpoint permite obtener la lista completa de foros disponibles.
### Ejemplo de Solicitud
```http
GET /Foros
```

### Respuesta Exitosa (Código 200 OK)
```json

{
  "id_foro": 1,
  "nombre_foro": "adsasdsa",
  "contenido_foro": "adasd",
  "fk_id_categoria": 1,
  "fecha": "2023-12-12T00:00:00.000Z"
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

## Endpoint: `GET /Foros/{id}`

Este endpoint permite obtener información detallada de un foro específico.
### Parámetros de URL
`{id}` - Identificador único del foro.
### Ejemplo de Solicitud
```http
GET /Foros/2
```

### Respuesta Exitosa (Código 200 OK)
```json

{
  "id_foro": 1,
  "nombre_foro": "adsasdsa",
  "contenido_foro": "adasd",
  "fk_id_categoria": 1,
  "fecha": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `POST /Foros`

Este endpoint permite agregar un nuevo foro al sistema.

### Ejemplo de Solicitud
```http
POST /Foros
```
```json

{
  "nombre_foro": "adsasdsa",
  "contenido_foro": "adasd",
  "fk_id_categoria": 1,
  "fecha": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `PUT /Foros{id}`

Este endpoint permite actualizar la información de un foro existente.

### Parámetros de URL
`{id}` - Identificador único del foro a actualizar.

### Ejemplo de Solicitud
```http
PUT /Foros/2
```
```json

{
  "nombre_foro": "adsasdsa",
  "contenido_foro": "adasd",
  "fk_id_categoria": 1,
  "fecha": "2023-12-12T00:00:00.000Z"
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
## Endpoint: `PATHC /Foros{id}`

Este endpoint permite realizar modificaciones parciales en la información de un foro existente.

### Parámetros de URL
`{id}` - Identificador único del foro a actualizar.

### Ejemplo de Solicitud
```http
PATHC /Foros/2
```
```json

{
  "nombre_foro": "adsasdsa",
  "contenido_foro": "adasd",
  "fk_id_categoria": 1,
  "fecha": "2023-12-12T00:00:00.000Z"
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
