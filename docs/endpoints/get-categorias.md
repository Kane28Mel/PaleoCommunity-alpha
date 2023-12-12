# Endpoint: `GET /Categorias`

Permite obtener la información sobre las Categorias mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la categoria que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /categorias/2
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_categoria": 2,
    "titulo": "Teropodos"
  }
]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Archivo no encontrado."
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

- Asegurate de incluir un ID válido en la solicitud para obtener una respuesta acertiva.