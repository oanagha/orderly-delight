import { UtensilsCrossed } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card">
        <UtensilsCrossed className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="text-[17px] font-bold tracking-tight text-foreground">
          Sava<span className="text-accent">ro</span>
        </span>
      )}
    </span>
  );
}
