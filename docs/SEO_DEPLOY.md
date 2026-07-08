# Despliegue SEO — MiPartido

Tras cambios SEO, sube el contenido de `build/` a la carpeta del servidor **`/webMiPartido/`**.

## Comandos

```bash
npm run build
```

Copia todo el contenido de `build/` a `htdocs/webMiPartido/` (o la ruta equivalente en tu hosting).

## Comprobar en producción

| URL | Qué debe contener |
|-----|-------------------|
| `https://maclusa.com/webMiPartido/` | `canonical`, Open Graph, JSON-LD en el HTML |
| `https://maclusa.com/webMiPartido/robots.txt` | Línea `Sitemap: https://maclusa.com/webMiPartido/sitemap.xml` |
| `https://maclusa.com/webMiPartido/sitemap.xml` | URL principal de la landing |

## Estado actual (última verificación local)

- **Build local:** OK — `robots.txt`, `sitemap.xml` e `index.html` incluyen los metadatos SEO.
- **Producción:** `robots.txt` en servidor aún sin la línea del sitemap hasta que despliegues el nuevo `build/`.

Siguiente paso: [SEO_SEARCH_CONSOLE.md](./SEO_SEARCH_CONSOLE.md)
