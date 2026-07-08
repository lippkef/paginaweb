# SEO — Google Search Console (pasos manuales)

URL de la landing: **https://maclusa.com/webMiPartido/**

## 1. Verificar la propiedad

1. Abre [Google Search Console](https://search.google.com/search-console).
2. Añade propiedad → **Prefijo de URL**: `https://maclusa.com/webMiPartido/`
3. Elige verificación por **etiqueta HTML**:
   - Copia el código que te da Google (`content="..."`).
   - En [`public/index.html`](../public/index.html), descomenta y sustituye la línea:
     ```html
     <meta name="google-site-verification" content="TU_CODIGO_AQUI" />
     ```
   - Ejecuta `npm run build`, sube el `build/` al servidor y pulsa **Verificar** en Search Console.

Alternativa: subir el archivo HTML de verificación a `public/` y desplegar.

## 2. Enviar el sitemap

En Search Console → **Sitemaps** → añade:

```
https://maclusa.com/webMiPartido/sitemap.xml
```

## 3. Solicitar indexación

En **Inspección de URLs**, pega:

```
https://maclusa.com/webMiPartido/
```

Pulsa **Solicitar indexación**.

## 4. Seguimiento (primeras semanas)

- **Páginas**: comprobar que la URL aparece como indexada.
- **Experiencia**: revisar usabilidad móvil y Core Web Vitals.
- **Rendimiento**: consultas, impresiones y clics (puede tardar días o semanas).

## 5. Enlaces recomendados

- Enlazar `/webMiPartido/` desde la página principal de `maclusa.com`.
- Compartir la URL en redes, email y materiales del club.
