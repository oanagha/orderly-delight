import { Trash2 } from "lucide-react";
import { QuantityControl } from "@/components/QuantityControl";
import { formatPrice } from "@/data/menu";
import { useApp, type CartItem } from "@/context/AppContext";

export function CartItemRow({ item }: { item: CartItem }) {
  const { increment, decrement, removeItem } = useApp();

  return (
    <li className="animate-fade-up flex gap-3 py-3">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-14 w-14 shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="truncate text-sm font-semibold text-foreground">{item.name}</p>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.name} from order`}
            className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors duration-200 hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <p className="text-sm font-bold text-accent">{formatPrice(item.price)}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <QuantityControl
            quantity={item.quantity}
            label={item.name}
            onIncrease={() => increment(item.id)}
            onDecrease={() => decrement(item.id)}
          />
          <span className="text-sm font-semibold tabular-nums text-foreground">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </li>
  );
}
