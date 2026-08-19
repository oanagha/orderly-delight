import { SearchX } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/data/menu";

export function ProductGrid({ products, resetKey }: { products: Product[]; resetKey: string }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
        <SearchX className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
        <p className="text-base font-semibold text-foreground">No dishes found</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Try another category or a different search term.
        </p>
      </div>
    );
  }

  return (
    <div
      key={resetKey}
      className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:gap-5 2xl:grid-cols-4"
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
