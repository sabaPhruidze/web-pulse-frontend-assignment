import type { NewsCategory } from "../../types/news";
import {
  ListboxButton,
  ListboxOptions,
  Listbox,
  ListboxOption,
} from "@headlessui/react";
// In dropdown we will have already created categories or all
export type NewsCategoryFilterValue = "all" | NewsCategory;

type Props = {
  value: NewsCategoryFilterValue;
  onChange: (next: NewsCategoryFilterValue) => void;
};
const CATEGORIES: { value: NewsCategoryFilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "market", label: "market" },
  { value: "crypto", label: "crypto" },
  { value: "technology", label: "technology" },
  { value: "macro", label: "macro" },
  { value: "earnings", label: "earnings" },
  { value: "regulatory", label: "regulatory" },
];
const NewsCategoryFilter = ({ value, onChange }: Props) => {
  const selected =
    CATEGORIES.find((category) => category.value === value) ?? CATEGORIES[0];
  return (
    <div className="mt-4 flex justify-between items-center">
      <p className=" text-pulse-soft font-semibold">Filter by category</p>
      <div className="relative">
        <Listbox value={value} onChange={onChange}>
          {({ open }) => (
            <div>
              <ListboxButton
                className={`search-bar w-40 h-8 p-0 pl-3 pr-8 rounded-b-none cursor-pointer flex items-center justify-between 
                ${open ? "ring-2 ring-pulse-primary ring-offset-0 ring-offset-transparent" : ""}
                `}
              >
                <span className="truncate">{selected.label}</span>
                <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-pulse-soft">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </ListboxButton>
              <ListboxOptions className=" absolute right-0 z-50 w-40 bg-pulse-surface border-2 border-pulse-border ring-2 ring-pulse-primary rounded-t-none rounded-b-lg overflow-hidden">
                {CATEGORIES.map((each) => (
                  <ListboxOption
                    key={each.value}
                    value={each.value}
                    className={({ active, selected }) => `
                cursor-pointer select-none px-3 py-2 text-sm font-semibold
                ${active ? "bg-pulse-surface2 text-pulse-text" : "text-pulse-text"}
                ${selected ? "opacity-100" : "opacity-90"}
                `}
                  >
                    {({ selected }) => (
                      <div className="flex items-center justify-between">
                        <span className="truncate">{each.label}</span>
                        {selected && (
                          <span className="text-pulse-primary font-bold">
                            ✓
                          </span>
                        )}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default NewsCategoryFilter;
