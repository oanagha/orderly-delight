import { ShoppingCart } from "lucide-react";

export function EmptyCart({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-10 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary">
        <ShoppingCart className="h-6 w-6" aria-hidden="true" />
      </span>
      <p className="mt-2 text-base font-semibold text-foreground">Your order is empty</p>
      <p className="max-w-56 text-sm leading-relaxed text-muted-foreground">
        Start exploring the menu and add something delicious.
      </p>
      <button
        type="button"
        onClick={onExplore}
        className="mt-3 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:brightness-105 active:scale-95"
      >
        Explore Menu
      </button>
    </div>
  );
}
