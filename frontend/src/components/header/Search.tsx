import { useState, useMemo } from "react";
import DebouncedSearchInput from "../ui/DebouncedSearchInput";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";
const Search = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState(""); // user written text
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false); // show or hide

  const filteredNavItems = useMemo(() => {
    const searchText = debouncedQuery.trim().toLowerCase();
    // if nothing written show all pages
    if (!searchText) return NAV_ITEMS;
    return NAV_ITEMS.filter((navItem) =>
      navItem.label.toLowerCase().includes(searchText),
    );
  }, [debouncedQuery]);

  const navigateTo = (targetPath: string) => {
    navigate(targetPath);
    setQuery("");
    setDebouncedQuery("");
    setOpen(false);
  };
  return (
    <div className="w-full max-w-[25rem] min-w-[10rem] px-5 relative">
      <DebouncedSearchInput
        value={query}
        onChange={(v) => {
          setQuery(v);
          if (!open) setOpen(true);
        }}
        delay={500}
        placeholder="Search..."
        onDebounce={(v) => {
          setDebouncedQuery(v);
        }}
        className="search-bar"
      />
      {open && (
        <div className="absolute left-5 right-5 top-[3.1rem] bg-pulse-surface2 border border-pulse-border rounded-lg overflow-hidden z-50">
          {filteredNavItems.length === 0 ? (
            <div className="px-3 py-2 text-pulse-soft text-sm">No Results</div>
          ) : (
            filteredNavItems.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => navigateTo(item.path)}
                className="w-full text-left px-3 py-2 hover:bg-pulse-surface text-pulse-text"
              >
                {item.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
