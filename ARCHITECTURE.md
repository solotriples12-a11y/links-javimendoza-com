# Architecture

## Propósito
Subdominio `links.javimendoza.com` para centralizar mis códigos de descuento y enlaces de afiliación en una página estética, ligera y compartible.

## Stack
- **HTML + CSS planos**, con un solo fichero JS (`copy.js`) para el click-to-copy de los códigos.
- **nginx 1.27-alpine** sirve `public/` como root.
- **Docker** para empaquetar; **Coolify** sobre Hetzner para deploy + HTTPS con Let's Encrypt.

## Identidad visual
Heredada de `javimendoza.com` y `app.javimendoza.com`: fondo `#0f0f0f`, texto `#f5f5f5`, tipografía system, acento rojo `#f56565`. Tarjeta con borde sutil (`#2a2a2a`) que se ilumina con el accent al hover, igual que las app-cards del sitio hermano.

## Modelo de tarjeta
Cada enlace es una sola `<a class="link-card">` con dos zonas:

- **Texto principal:** nombre de la marca + tagline (ej. "10 % de descuento", "Enlace de afiliado").
- **Código (opcional):** chip mono-espaciado dentro del propio `<a>` que, al hacer click, copia el código al portapapeles. El `<button>` cancela la propagación para no disparar la navegación del `<a>`.

Si no hay código de descuento, simplemente se omite el chip — la tarjeta sigue siendo una `<a>` clicable.

## SEO y enlaces de afiliación
Todos los `<a>` externos llevan `rel="sponsored noopener"`. `sponsored` es la directiva que Google recomienda para enlaces remunerados; `noopener` evita que la pestaña destino pueda manipular la nuestra.

## Convenciones
- Añadir un enlace = duplicar un bloque `<a class="link-card">` en `public/index.html`. No hay step de build.
- Si se quiere mantener una fuente de datos en JSON en el futuro, el JS está aislado en `js/copy.js` y se puede sustituir el render del HTML por algo dinámico sin tocar el resto.
- Los enlaces internos son siempre absolutos (`/css/...`, `/js/...`).
