import { createServer } from "vinxi/http"
import { getManifest } from "vinxi/manifest"

export default createServer(async (event) => {
  const manifest = getManifest("client")
  const url = new URL(event.request.url)

  return new Response(
    `<!DOCTYPE html><html lang="en"><head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>SYBAUUPI</title>
      ${manifest.inputs.$css.map((href: string) => `<link rel="stylesheet" href="${href}" />`).join("")}
    </head><body>
      <div id="root"></div>
      ${manifest.inputs.$js.map((src: string) => `<script type="module" src="${src}"></script>`).join("")}
    </body></html>`,
    { headers: { "Content-Type": "text/html" } }
  )
})
