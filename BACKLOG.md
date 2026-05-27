# Backlog

## Pendiente

- **URLs completas de NuPhy y Keychron.** En la captura de origen las URLs aparecían truncadas. Las actuales son las visibles (`https://nuphy.com/?sca_ref=9133839.LZOVH` y `https://keychron.com.es/?bg_ref=HBVOFM1v`). Verificar con el dashboard real de cada programa y reemplazar.
- **DNS:** crear registro `A` para `links.javimendoza.com` en Hetzner DNS apuntando a la IP del servidor de Coolify.
- **Coolify:** dar de alta la aplicación apuntando al repo, dominio `https://links.javimendoza.com`, puerto 80, auto-deploy on push.
- **Enlace desde `javimendoza.com`:** añadir una tarjeta en el `templates/index.html` del sitio principal apuntando a este subdominio.

## Ideas futuras

- Contador real de clicks (proxy intermedio o tabla de redirecciones server-side).
- Categorías o agrupación visual cuando la lista crezca (teclados, e-readers, etc.).
- Tema claro/oscuro automático según preferencia del SO.
