import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
};
const AssetSeachBar = ({
  value,
  onChange,
  placeholder = "Search by symbol or name...", //default placeholder
}: Props) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-bar mt-3"
      />
    </div>
  );
};

export default AssetSeachBar;
