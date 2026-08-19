import { ArrowRight, X } from "lucide-react";
import { OrderSummary } from "@/components/OrderSummary";
import { formatPrice } from "@/data/menu";
import { useApp } from "@/context/AppContext";

interface Props {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onPlaceOrder: () => void;
}

export function MobileOrderBar({ open, onOpen, onClose, onPlaceOrder }: Props) {
  const { count, total } = useApp();

  return (
    <div>
      {count > 0 && !open && (
        <div className="animate-fade-up fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
          <button
            type="button"
            onClick={onOpen}
            className="flex w-full items-center justify-between gap-3 rounded-xl bg-accent px-4 py-3 text-accent-foreground shadow-card transition-transform duration-200 active:scale-[0.99]"
          >
            <span className="text-sm font-semibold">
              {count} {count === 1 ? "Item" : "Items"} · {formatPrice(total)}
            </span>
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              View Order
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Your order">
          <button
            type="button"
            aria-label="Close order sheet"
            onClick={onClose}
            className="absolute inset-0 animate-in fade-in bg-foreground/40 backdrop-blur-[2px]"
          />
          <div className="animate-sheet-up absolute inset-x-0 bottom-0 flex max-h-[85vh] flex-col overflow-hidden rounded-t-3xl bg-card shadow-panel">
            <div className="flex items-center justify-between px-4 pt-3">
              <span className="mx-auto h-1 w-10 rounded-full bg-border" aria-hidden="true" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close order"
                className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col pb-[env(safe-area-inset-bottom)]">
              <OrderSummary onPlaceOrder={onPlaceOrder} onExplore={onClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
