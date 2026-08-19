import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "@/components/LoginForm";
import { useApp } from "@/context/AppContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — Savaro Food Ordering" },
      {
        name: "description",
        content:
          "Sign in to Savaro to browse the menu, build your order and check out in seconds.",
      },
      { property: "og:title", content: "Sign in — Savaro Food Ordering" },
      {
        property: "og:description",
        content: "Good food. Simple ordering. Sign in and build your perfect order.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "twitter:image",
        content:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { user, authReady } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (authReady && user) navigate({ to: "/menu", replace: true });
  }, [authReady, user, navigate]);

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <section className="relative hidden overflow-hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80"
          alt="Chef plating a freshly made dish in a warm restaurant kitchen"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[oklch(0.2_0.08_285/0.92)] via-[oklch(0.2_0.08_285/0.55)] to-[oklch(0.2_0.08_285/0.3)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-12 text-primary-foreground">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">Savaro</p>
          <h2 className="mt-3 max-w-md text-4xl font-bold leading-tight">
            Good food. Simple ordering.
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed opacity-85">
            Discover your favorites, build your order and enjoy a seamless ordering experience.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center bg-background px-5 py-12 sm:px-10">
        <LoginForm />
      </section>
    </main>
  );
}
