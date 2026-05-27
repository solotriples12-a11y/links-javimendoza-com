# Progress

## 2026-05-27 · Scaffold inicial

**Cambios**
- Estructura del proyecto mirroring `app-javimendoza-com`: `public/`, `Dockerfile`, `nginx.conf`, docs.
- `public/index.html` con 7 tarjetas iniciales: NuPhy, Lofree, ATK, Keychron, rhinokey, Amazon, BOOX.
- `public/css/style.css` reutilizando paleta y tarjetas del sitio hermano, ajustadas para layout vertical de enlaces.
- `public/js/copy.js` con click-to-copy: el chip cancela la propagación al `<a>` padre y muestra "Copiado" durante 1.5 s.
- `public/favicon.svg` con motivo de eslabón en acento rojo, mismo fondo `#0f0f0f` que el resto.

**Por qué**
- Mantener la misma estética del ecosistema `javimendoza.com` sin compartir código (subdominio aislado, decisión registrada en DECISIONS).
- `rel="sponsored noopener"` en todos los `<a>` por SEO + seguridad.

**Verificado**
- HTML válido, JS sin dependencias externas, CSS responsive a 600 px.
- Previsualización local del HTML/CSS revisada en el panel de Launch preview.

**Pendiente**
- Push a GitHub, DNS, alta en Coolify (ver BACKLOG).
- Completar las URLs truncadas de NuPhy y Keychron con la fuente real.
