import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import "../lib/i18n";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="max-w-lg text-center">
        <div className="text-[88px] font-extrabold leading-none text-primary sm:text-[120px]">404</div>
        <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">{t("notfound.title")}</h2>
        <p className="mt-3 text-sm text-primary/75 sm:text-base">{t("notfound.sub")}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-navy transition hover:brightness-110">
            {t("cta.goHome")}
          </Link>
          <Link to="/services" className="rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground shadow-card transition hover:brightness-110">
            {t("cta.viewServices")}
          </Link>
          <Link to="/booking" className="rounded-full border border-primary/20 bg-card px-5 py-3 text-sm font-bold text-primary transition hover:bg-muted">
            {t("cta.bookNow")}
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or go home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">
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
      { title: "TN45 Travel Company — Trichy Travel Assistance" },
      { name: "description", content: "TN45 Travel Company provides reliable travel and assistance services across Tamil Nadu, focusing on elderly, medical, and station support." },
      { name: "author", content: "TN45 Travel Company" },
      { property: "og:title", content: "TN45 Travel Company — Trichy Travel Assistance" },
      { property: "og:description", content: "Reliable travel and assistance services across Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "TN45 Travel Company" },
      { name: "twitter:description", content: "Reliable travel and assistance services across Tamil Nadu." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
