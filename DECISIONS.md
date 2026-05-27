# Decisions

## 2026-05-27 · Subdominio nuevo en vez de `/links` en `javimendoza.com`
- **Contexto:** mover el listado de enlaces de afiliación a su propio espacio.
- **Opciones consideradas:**
  - Página `/links` dentro de `javimendoza.com` (Flask, mismo deploy).
  - Subdominio independiente `links.javimendoza.com` con su propio repo.
- **Decisión:** subdominio independiente.
- **Consecuencias:** el sitio principal sigue siendo solo personal/social, este queda libre para iterar la presentación de afiliados sin tocar el Flask, y comparte sólo el lenguaje visual (no el código). Mismo patrón Docker + Coolify que `app.javimendoza.com`.

## 2026-05-27 · Una sola `<a>` por enlace, chip dentro como `<button>`
- **Contexto:** cada tarjeta tiene que ser clicable y, a la vez, permitir copiar un código sin que se abra el enlace.
- **Decisión:** la tarjeta entera es `<a target="_blank">`. El chip de código es un `<button type="button">` anidado que cancela la propagación en su listener.
- **Consecuencias:** la zona de click es muy grande (mejor UX móvil) y no necesitamos dos elementos visualmente separados. Anidar `<button>` dentro de `<a>` es válido en HTML5 — la única regla es no anidar `<a>` dentro de `<a>`.

## 2026-05-27 · `rel="sponsored noopener"` en todos los enlaces
- **Contexto:** son enlaces de afiliación. Google penaliza marcarlos como `nofollow` genérico o no marcarlos.
- **Decisión:** `sponsored` para indicar relación comercial + `noopener` por seguridad.
- **Consecuencias:** cumple las recomendaciones de Search Central para enlaces patrocinados sin perder señales positivas a las marcas.

## 2026-05-27 · Sin step de build; HTML hardcodeado
- **Contexto:** se podría leer un JSON y renderizar las tarjetas dinámicamente.
- **Decisión:** HTML escrito a mano por ahora.
- **Consecuencias:** el coste de añadir o quitar una marca es duplicar un bloque y commitear. Si en el futuro la lista crece o queremos contadores reales de clicks, migrar a un render dinámico es sencillo porque el JS ya está aislado.
