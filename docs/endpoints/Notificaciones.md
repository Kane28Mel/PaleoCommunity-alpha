# Notificaciones

## Endpoint: `GET /Notificaciones/`

Este endpoint permite obtener la lista completa de notificaciones.
### Ejemplo de Solicitud
```http
GET /Notificaciones
```

### Respuesta Exitosa (Código 200 OK)
```json
{
  "id_notificacion": 2,
  "fk_id_usuario": 1,
  "tipo_notificacion": "klasdajkjkhsdajkhajkhsdajkhsdaj",
  "fk_id_elemento": 1,
  "estado": 1
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
  
## Endpoint: `POST /Notificaciones`

Este endpoint permite agregar una nueva notificación al sistema.

### Ejemplo de Solicitud
```http
POST /Notificaciones
```
```json
{
    "id_notificacion": 2,
    "fk_id_usuario": 1,
    "tipo_notificacion": "klasdajkjkhsdajkhajkhsdajkhsdaj",
    "fk_id_elemento": 1,
    "estado": 1
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