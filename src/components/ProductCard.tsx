import { Plus, Star } from "lucide-react";
import { formatPrice, type Product } from "@/data/menu";
import { useApp } from "@/context/AppContext";
import { QuantityControl } from "@/components/QuantityControl";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem, increment, decrement, items } = useApp();
  const inCart = items.find((item) => item.id === product.id)?.quantity ?? 0;

  const handleAdd = () => addItem(product);

  return (
    <article
      className="animate-fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
    >
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur-sm">
          {product.category}
        </span>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-2 py-1 text-[11px] font-semibold text-foreground backdrop-blur-sm">
          <Star className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
          {product.rating.toFixed(1)}
        </span>
        {inCart > 0 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
            {inCart} in order
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-semibold leading-snug text-foreground">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-accent">{formatPrice(product.price)}</span>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to your order`}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 active:scale-95 ${
              added
                ? "bg-success text-success-foreground"
                : "bg-accent-soft text-accent group-hover:bg-accent group-hover:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {added ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Plus className="h-4 w-4" aria-hidden="true" />
            )}
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
