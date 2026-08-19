import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { formatPrice } from "@/data/menu";

interface Props {
  orderNumber: string;
  itemCount: number;
  total: number;
  onClose: () => void;
}

export function OrderConfirmationModal({ orderNumber, itemCount, total, onClose }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-60 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirm-title"
    >
      <div className="absolute inset-0 animate-in fade-in bg-foreground/45 backdrop-blur-sm" />
      <div className="animate-modal-in relative w-full max-w-sm rounded-3xl border border-border bg-card p-7 text-center shadow-panel">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/12 text-success">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 id="order-confirm-title" className="mt-4 text-xl font-bold text-foreground">
          Order Placed Successfully!
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Your order has been added successfully.
        </p>

        <dl className="mt-5 space-y-2 rounded-2xl bg-secondary/70 p-4 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Order number</dt>
            <dd className="font-semibold text-foreground">{orderNumber}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Items</dt>
            <dd className="font-semibold text-foreground">{itemCount}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Total paid</dt>
            <dd className="font-bold text-accent">{formatPrice(total)}</dd>
          </div>
        </dl>

        <button
          ref={buttonRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.99]"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
