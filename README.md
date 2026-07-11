# Aula Play

Plataforma educativa modular y estática. Incluye dos juegos independientes:

- **Números romanos** — lecciones, conversión bidireccional, pistas, rachas, reto de 60 segundos, perfiles y juego en grupo.
- **Aprende a leer** — asociación de diez imágenes con palabras sencillas para niños a partir de 5 años.

No necesita servidor, base de datos, registro ni dependencias externas. El progreso de cada módulo se guarda por separado en `localStorage`.

## Vista previa local

Desde la raíz del proyecto:

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080/`. No abras el HTML como `file://`, porque la aplicación utiliza módulos JavaScript nativos.

## Arquitectura

```text
index.html                 Portada y vistas de los módulos
styles.css                 Estilos compartidos y adaptables
js/app.js                  Navegación y arranque
js/core/storage.js         Persistencia compartida
js/core/sounds.js          Sonidos y lectura de palabras
js/data/roman-data.js      Símbolos y conversión romana
js/data/reading-data.js    Banco de palabras e imágenes
js/modules/roman.js        Juego de números romanos
js/modules/reading.js      Juego de iniciación a la lectura
```

Todos los enlaces y módulos usan rutas relativas, por lo que la aplicación funciona bajo una subcarpeta de GitHub Pages.

## Publicación

El desarrollo de Aula Play se mantiene en la rama `aula-play`. La rama `main` no debe modificarse ni fusionarse sin revisión y aprobación explícitas.
