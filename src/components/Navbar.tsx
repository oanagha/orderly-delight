import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { LogOut, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useApp } from "@/context/AppContext";

interface Props {
  query: string;
  onQueryChange: (value: string) => void;
  onOpenOrder: () => void;
}

export function Navbar({ query, onQueryChange, onOpenOrder }: Props) {
  const { count, logout, user } = useApp();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate({ to: "/", replace: true });
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-card/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-b border-border shadow-card" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 justify-self-start md:flex">
          <span className="rounded-full bg-primary-soft px-3.5 py-1.5 text-sm font-semibold text-primary">
            Menu
          </span>
          <button
            type="button"
            onClick={onOpenOrder}
            className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground"
          >
            My Order
          </button>
        </nav>

        <div className="flex items-center gap-1.5 justify-self-end sm:gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 transition-colors focus-within:border-primary/50 lg:flex">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <label htmlFor="desktop-search" className="sr-only">
              Search dishes
            </label>
            <input
              id="desktop-search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search dishes"
              className="w-40 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen((open) => !open)}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors duration-200 hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {searchOpen ? (
              <X className="h-[18px] w-[18px]" aria-hidden="true" />
            ) : (
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onOpenOrder}
            aria-label={`View your order, ${count} items`}
            className="relative grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors duration-200 hover:bg-secondary"
          >
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
            {count > 0 && (
              <span
                key={count}
                className="animate-pop absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground"
              >
                {count}
              </span>
            )}
          </button>

          <span
            className="hidden h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary sm:grid"
            title={user ?? "Guest"}
          >
            <User className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-destructive/40 hover:bg-destructive/10 hover:text-destructive active:scale-95"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="animate-fade-up border-t border-border px-4 py-2.5 lg:hidden">
          <label htmlFor="mobile-search" className="sr-only">
            Search dishes
          </label>
          <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              id="mobile-search"
              autoFocus
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search dishes"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}
    </header>
  );
}
