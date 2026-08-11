import {createServer}from"vinxi/http"
import {getManifest}from"vinxi/manifest"

export default createServer(async(e)=>{
 const m=getManifest("client")
 return new Response(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><link rel="icon" type="image/x-icon" href="/favicon.ico"/><title>SYBAUUPI</title>${m.inputs.$css.map((h:string)=>`<link rel="stylesheet" href="${h}"/>`).join("")}</head><body><div id="root"></div>${m.inputs.$js.map((s:string)=>`<script type="module" src="${s}"></script>`).join("")}</body></html>`,{headers:{"Content-Type":"text/html"}})
})
