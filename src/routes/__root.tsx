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
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-lg text-center">
        <div className="text-[88px] font-extrabold leading-none text-primary sm:text-[120px]">404</div>
        <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">Looks like you took a wrong turn</h2>
        <p className="mt-3 text-sm text-primary/75 sm:text-base">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-navy transition hover:brightness-110">
            Go Home
          </Link>
          <Link to="/services" className="rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-card transition hover:brightness-110">
            View Services
          </Link>
          <Link to="/booking" className="rounded-full border border-primary/20 bg-card px-5 py-3 text-sm font-bold text-primary transition hover:bg-muted">
            Book Now
          </Link>
        </div>
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
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
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
      { title: "TN45 Travel Assist | Elderly, Medical & Travel Assistance Se" },
      { name: "description", content: "TN45 Travel Assist provides reliable travel and assistance services across Tamil Nadu, focusing on elderly, medical, and station support." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "TN45 Travel Assist | Elderly, Medical & Travel Assistance Se" },
      { property: "og:description", content: "TN45 Travel Assist provides reliable travel and assistance services across Tamil Nadu, focusing on elderly, medical, and station support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "TN45 Travel Assist | Elderly, Medical & Travel Assistance Se" },
      { name: "twitter:description", content: "TN45 Travel Assist provides reliable travel and assistance services across Tamil Nadu, focusing on elderly, medical, and station support." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f089c2da-13cc-492d-bc29-8e7e019244bf/id-preview-ba1ba44c--1b95fec7-92a4-49d4-932b-168b789ee6a6.lovable.app-1781506400430.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f089c2da-13cc-492d-bc29-8e7e019244bf/id-preview-ba1ba44c--1b95fec7-92a4-49d4-932b-168b789ee6a6.lovable.app-1781506400430.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
