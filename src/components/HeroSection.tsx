import { Clock, Flame, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="animate-fade-up relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 flex flex-col justify-center gap-4 bg-linear-to-br from-primary-soft/80 to-card px-6 py-8 sm:px-9 sm:py-12">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            <Flame className="h-3.5 w-3.5" aria-hidden="true" />
            Freshly prepared, every order
          </span>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Find your favorite
          </h1>
          <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Choose from our delicious selection and build your perfect order — no queues, no
            confusion, just good food.
          </p>
          <dl className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
              <dt className="sr-only">Rating</dt>
              <dd className="font-semibold text-foreground">
                4.8 <span className="font-normal text-muted-foreground">(2.4k reviews)</span>
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">Preparation time</dt>
              <dd className="font-semibold text-foreground">
                20–30 min <span className="font-normal text-muted-foreground">average</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-52 md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80"
            alt="A table filled with freshly prepared dishes"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-card via-card/25 to-transparent md:from-card md:via-card/40"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
