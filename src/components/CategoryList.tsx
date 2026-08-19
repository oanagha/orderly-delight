import { categories, type CategoryId } from "@/data/menu";

interface Props {
  active: CategoryId;
  onSelect: (id: CategoryId) => void;
}

export function CategoryList({ active, onSelect }: Props) {
  return (
    <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      {categories.map((category) => {
        const isActive = category.id === active;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            aria-pressed={isActive}
            className={`group flex shrink-0 items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 transition-all duration-200 ${
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-card"
                : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
            }`}
          >
            <span className="h-9 w-9 overflow-hidden rounded-full bg-muted ring-2 ring-card">
              <img
                src={category.image}
                loading="eager"
                decoding="async"
                alt=""
                aria-hidden="true"
                
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </span>
            <span className="text-sm font-semibold">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}
