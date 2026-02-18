import { AssetFilter } from "../../types/assets";

type Tab = {
  key: AssetFilter;
  label: string;
};
const TABS: Tab[] = [
  { key: "all", label: "All" },
  { key: "stocks", label: "Stocks Only" },
  { key: "crypto", label: "Crypto Only" },
];

type Props = {
  value: AssetFilter;
  onChange: (next: AssetFilter) => void;
};
const AssetFilterTabs = ({ value, onChange }: Props) => {
  return (
    <div className="mt-4 flex gap-2">
      {TABS.map((tab) => {
        const isActive = tab.key === value;
        return (
          <button
            className={[
              "border border-pulse-border px-3 py-2 rounded-lg text-sm font-semibold",
              isActive
                ? "bg-pulse-surface2 text-pulse-text"
                : "bg-pulse-surface text-pulse-soft",
            ].join(" ")}
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default AssetFilterTabs;
