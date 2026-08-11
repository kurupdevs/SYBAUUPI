import { createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { createApp } from "vinxi"

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register { router: typeof router }
}

createApp({ router }).start()
