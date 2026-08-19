import { History } from "lucide-react";
import { CartItemRow } from "@/components/CartItemRow";
import { EmptyCart } from "@/components/EmptyCart";
import { formatPrice, TAX_RATE } from "@/data/menu";
import { useApp } from "@/context/AppContext";

interface Props {
  onPlaceOrder: () => void;
  onExplore: () => void;
}

export function OrderSummary({ onPlaceOrder, onExplore }: Props) {
  const { items, subtotal, tax, total, count, orders } = useApp();

  const history = orders.length > 0 && (
    <section className="border-t border-border px-4 py-4">
      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        <History className="h-3.5 w-3.5" aria-hidden="true" />
        Order History
      </h3>
      <ul className="mt-3 space-y-2">
        {orders.map((order) => (
          <li
            key={order.number}
            className="rounded-xl border border-border bg-secondary/50 px-3 py-2.5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm font-semibold text-foreground">{order.number}</span>
              <span className="text-sm font-bold tabular-nums text-accent">
                {formatPrice(order.total)}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {order.placedAt} · {order.itemCount} {order.itemCount === 1 ? "item" : "items"}
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {order.items.map((item) => `${item.quantity}× ${item.name}`).join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <div className="flex max-h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3.5">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
          My Order
        </h2>
        {count > 0 && (
          <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary">
            {count} {count === 1 ? "item" : "items"}
          </span>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <EmptyCart onExplore={onExplore} />
          {history}
        </div>
      ) : (
        <>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <ul className="divide-y divide-border px-4">
              {items.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </ul>
            {history}
          </div>


          <div className="border-t border-border px-4 py-4">
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium tabular-nums text-foreground">
                  {formatPrice(subtotal)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Tax &amp; charges ({TAX_RATE * 100}%)</dt>
                <dd className="font-medium tabular-nums text-foreground">{formatPrice(tax)}</dd>
              </div>
              <div className="mt-2 flex items-baseline justify-between border-t border-dashed border-border pt-3">
                <dt className="text-sm font-bold uppercase tracking-wide text-foreground">Total</dt>
                <dd className="text-xl font-bold tabular-nums text-accent">{formatPrice(total)}</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={onPlaceOrder}
              className="mt-4 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-accent-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.99]"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
