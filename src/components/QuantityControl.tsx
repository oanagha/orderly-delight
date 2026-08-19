import { Minus, Plus } from "lucide-react";

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  label: string;
}

export function QuantityControl({ quantity, onIncrease, onDecrease, label }: Props) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1">
      <button
        type="button"
        onClick={onDecrease}
        aria-label={`Decrease quantity of ${label}`}
        className="grid h-7 w-7 place-items-center rounded-full bg-card text-foreground shadow-sm transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-90"
      >
        <Minus className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      <span
        key={quantity}
        aria-live="polite"
        className="animate-pop min-w-6 text-center text-sm font-semibold tabular-nums text-foreground"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label={`Increase quantity of ${label}`}
        className="grid h-7 w-7 place-items-center rounded-full bg-accent text-accent-foreground shadow-sm transition-all duration-200 hover:brightness-105 active:scale-90"
      >
        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}
