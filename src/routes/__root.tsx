import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 bg-dots">
      <div className="max-w-md text-center rounded-3xl bg-card doodle-border shadow-doodle-lg p-8">
        <div className="text-7xl animate-wobble">🍕</div>
        <h1 className="mt-4 font-display text-6xl">404</h1>
        <h2 className="mt-2 text-xl font-bold">This dish is off the menu</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for got eaten.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press px-5 py-2 font-bold">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center rounded-3xl bg-card doodle-border shadow-doodle-lg p-8">
        <div className="text-6xl">🥲</div>
        <h1 className="mt-3 font-display text-2xl">Kitchen mishap</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary text-primary-foreground doodle-border shadow-doodle-sm press px-4 py-2 font-bold"
          >
            Try again
          </button>
          <a href="/" className="rounded-full bg-cream doodle-border shadow-doodle-sm press px-4 py-2 font-bold">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FoodEat — Fresh Food, Doodle-Fast Delivery" },
      { name: "description", content: "Order burgers, pizza, sushi, desserts and drinks from the best local kitchens. Free delivery over $25." },
      { name: "author", content: "@glitterwine" },
      { name: "theme-color", content: "#f7f2e0" },
      { property: "og:title", content: "FoodEat — Fresh Food, Doodle-Fast Delivery" },
      { property: "og:description", content: "Cravings, handled. Order in seconds from FoodEat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Fredoka:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
