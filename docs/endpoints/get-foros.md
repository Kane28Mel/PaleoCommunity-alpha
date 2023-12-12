# Endpoint: `GET /Foros/{id}`

Permite obtener información detallada sobre un foro mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del foro que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /foros/5
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_foro": 5,
  "nombre": "Meraxes, nuevo teropodo argentino",
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
  sobre un foro en específico.