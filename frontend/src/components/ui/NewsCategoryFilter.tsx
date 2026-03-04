import type { NewsCategory } from "../../types/news";

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
  return (
    <div className="mt-4 flex justify-between items-center">
      <p className=" text-pulse-soft font-semibold">Filter by category</p>
      <div>
        <select
          name="filter news"
          value={value}
          onChange={(e) => onChange(e.target.value as NewsCategoryFilterValue)}
          className="search-bar w-40 h-8"
        ></select>
      </div>
    </div>
  );
};

export default NewsCategoryFilter;
