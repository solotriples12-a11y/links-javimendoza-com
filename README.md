# links.javimendoza.com

Subdominio con mis códigos de descuento y enlaces de afiliación. HTML/CSS planos servidos por nginx, desplegados con Coolify en Hetzner — mismo patrón que `app.javimendoza.com`.

## Estructura

```
public/
├── index.html         → links.javimendoza.com
├── favicon.svg
├── css/style.css      → estilos compartidos con javimendoza.com
└── js/copy.js         → click-to-copy de los chips de código
```

## Añadir o quitar un enlace

Editar `public/index.html` y duplicar un bloque `<a class="link-card">`:

- **Con código:** incluir el `<button class="code-chip" data-code="…">…</button>` dentro del `<a>`. El JS de `js/copy.js` lo cablea automáticamente al cargar.
- **Sin código (afiliado puro):** omitir el `<button>`.

`rel="sponsored noopener"` se mantiene siempre — es la directiva correcta para enlaces de afiliación según Google.

## Desarrollo local

```bash
cd public
python3 -m http.server 8000
```

Abre <http://localhost:8000>.

O con Docker, igual que producción:

```bash
docker build -t links-javimendoza .
docker run --rm -p 8080:80 links-javimendoza
```

## Deploy

Ver [DEPLOY.md](DEPLOY.md) para los pasos de DNS y Coolify la primera vez. Después, auto-deploy en cada push a `main`.
