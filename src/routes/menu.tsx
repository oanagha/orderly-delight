import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoryList } from "@/components/CategoryList";
import { ProductGrid } from "@/components/ProductGrid";
import { OrderSummary } from "@/components/OrderSummary";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { OrderConfirmationModal } from "@/components/OrderConfirmationModal";
import { useApp } from "@/context/AppContext";
import { useReveal } from "@/hooks/use-reveal";
import { categories, products, type CategoryId } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Savaro Food Ordering" },
      {
        name: "description",
        content:
          "Browse burgers, pizza, pasta, snacks, desserts and drinks. Add dishes and place your order in seconds.",
      },
      { property: "og:title", content: "Menu — Savaro Food Ordering" },
      {
        property: "og:description",
        content: "Choose from our delicious selection and build your perfect order.",
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
  component: MenuPage,
});

interface PlacedOrder {
  number: string;
  items: number;
  total: number;
}

function MenuPage() {
  const { user, authReady, items, count, total, clearCart } = useApp();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [placed, setPlaced] = useState<PlacedOrder | null>(null);
  const menuReveal = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (authReady && !user) navigate({ to: "/", replace: true });
  }, [authReady, user, navigate]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      const matchesQuery =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    const order = {
      number: `#SV${Math.floor(100000 + Math.random() * 899999)}`,
      items: count,
      total,
    };
    addOrder({
      number: order.number,
      placedAt: new Date().toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      }),
      itemCount: count,
      total,
      items: items.map((item) => ({ id: item.id, name: item.name, quantity: item.quantity })),
    });
    setPlaced(order);
    setSheetOpen(false);
    clearCart();
  };


  const activeName = categories.find((category) => category.id === activeCategory)?.name ?? "All";

  if (!authReady || !user) {
    return <div className="min-h-screen bg-background" aria-hidden="true" />;
  }

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <Navbar query={query} onQueryChange={setQuery} onOpenOrder={() => setSheetOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <HeroSection />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div
            ref={menuReveal.ref}
            data-visible={menuReveal.visible}
            className="reveal min-w-0"
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">Categories</h2>
              <p className="text-sm text-muted-foreground">Pick a category to filter the menu.</p>
            </div>
            <CategoryList active={activeCategory} onSelect={setActiveCategory} />

            <div className="mb-4 mt-8 flex items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {activeName}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "dish" : "dishes"} available
                </p>
              </div>
            </div>

            <ProductGrid products={filtered} resetKey={`${activeCategory}-${query}`} />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <OrderSummary
                onPlaceOrder={handlePlaceOrder}
                onExplore={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
          </aside>
        </div>
      </main>

      <MobileOrderBar
        open={sheetOpen}
        onOpen={() => setSheetOpen(true)}
        onClose={() => setSheetOpen(false)}
        onPlaceOrder={handlePlaceOrder}
      />

      {placed && (
        <OrderConfirmationModal
          orderNumber={placed.number}
          itemCount={placed.items}
          total={placed.total}
          onClose={() => setPlaced(null)}
        />
      )}
    </div>
  );
}
