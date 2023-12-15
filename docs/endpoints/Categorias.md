# Categorias

## Endpoint: `GET /Categorias/`

Este endpoint permite obtener la lista completa de categorías disponibles.
### Ejemplo de Solicitud
```http
GET /Categorias
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_categoria": 1,
  "nombre_categoria": "PASOS",
  "descripcion_categoria": "asdassadsadsadsasad"
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

## Endpoint: `GET /Categorias/{id}`

Este endpoint permite obtener información detallada de una categoría específica.
### Parámetros de URL
`{id}`  - Identificador único de la categoría.
### Ejemplo de Solicitud
```http
GET /Categorias/2
```

### Respuesta Exitosa (Código 200 OK)
```json
{
    "nombre_categoria": "PASOS",
    "descripcion_categoria": "asdassadsadsadsasad"
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
## Endpoint: `POST /Categorias`

Este endpoint permite agregar una nueva categoría al sistema.

### Ejemplo de Solicitud
```http
POST /Categorias
```
```json
{
  "nombre_categoria": "PASOS",
  "descripcion_categoria": "asdassadsadsadsasad"
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
## Endpoint: `PUT /Categorias{id}`

Este endpoint permite actualizar la información de una categoría existente.
### Parámetros de URL
`{id}`  - Identificador único de la categoría a actualizar.

### Ejemplo de Solicitud
```http
PUT /Categorias/2
```
```json
{
    "nombre_categoria": "PASOS",
    "descripcion_categoria": "asdassadsadsadsasad"
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
## Endpoint: `PATHC /Categorias{id}`

Este endpoint permite realizar modificaciones parciales en la información de una categoría existente.
### Parámetros de URL
`{id}`  - Identificador único de la categoría a actualizar.

### Ejemplo de Solicitud
```http
PATHC /Categorias/2
```
```json
{
  "nombre_categoria": "PASOS",
  "descripcion_categoria": "asdassadsadsadsasad"
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
