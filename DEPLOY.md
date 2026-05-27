# Deploy

Pasos para publicar `links.javimendoza.com` la primera vez. Una vez configurado, los cambios se despliegan solos al hacer push a `main`.

## 1. DNS en Hetzner

En el panel de Hetzner DNS (misma zona donde gestionas `javimendoza.com` y `app.javimendoza.com`):

1. Abre la zona DNS de `javimendoza.com`.
2. Añade un registro nuevo:
   - **Tipo:** `A`
   - **Nombre:** `links`
   - **Valor:** la **IP pública** del servidor de Hetzner donde corre Coolify (la misma que `javimendoza.com` y `app.javimendoza.com`; puedes verlo con `dig +short app.javimendoza.com`).
   - **TTL:** el por defecto (3600 s) está bien.
3. Si tienes IPv6 en ese servidor, añade también un `AAAA` para `links` con la IPv6.
4. Guarda.

Verifica con `dig +short links.javimendoza.com` que ya resuelve a tu IP antes de pasar al siguiente paso (puede tardar unos minutos).

## 2. Repositorio en GitHub

```bash
cd /Users/javier/Documents/Claude/Projects/links-javimendoza-com
git init
git add .
git commit -m "Initial commit"
git branch -M main
gh repo create links-javimendoza-com --public --source=. --remote=origin --push
```

(O crear el repo vacío por la web y `git remote add origin ...` + `git push -u origin main`.)

## 3. Nueva aplicación en Coolify

En el panel de Coolify, mismo servidor donde están `javimendoza.com` y `app.javimendoza.com`:

1. **+ New Resource → Application → Public Repository** (o privado conectando GitHub).
2. **Repository URL:** la del repo recién creado. **Branch:** `main`.
3. **Build Pack:** `Dockerfile`.
4. **Domains:** `https://links.javimendoza.com`.
5. **Port:** `80` (el `EXPOSE 80` del Dockerfile).
6. Activa **HTTPS** → certificado automático Let's Encrypt.
7. Activa **Auto-deploy on push** y configura el webhook de GitHub si Coolify lo pide.
8. **Deploy**.

Tras un par de minutos, `https://links.javimendoza.com` debería responder con el listado de enlaces.

## Cambios futuros

Cualquier edición en `public/**` → push a `main` → Coolify reconstruye y redepliega automáticamente.

## Añadir o quitar un enlace

1. Editar `public/index.html`.
2. Para añadir uno **con código de descuento**, duplicar un bloque ya existente que tenga `<button class="code-chip">` y ajustar `href`, `data-code`, nombre y tagline.
3. Para añadir uno **sin código**, duplicar un bloque sin `<button>` (Amazon, BOOX, rhinokey sirven de referencia).
4. Mantener siempre `rel="sponsored noopener"`.
5. Commit + push.
