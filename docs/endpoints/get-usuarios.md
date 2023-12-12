# Endpoint: `GET /Usuarios/{id}`

Permite obtener la informacion almacenada sobre un usuario especifico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /UsuariosModel/2
```

## Respuesta Exitosa (Código 200 OK)
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

## Respuestas de Errores Posibles
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

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un usuario en específico.