import { useState } from "react";
import DebouncedSearchInput from "../ui/DebouncedSearchInput";
const Search = () => {
  const [query, setQuery] = useState(""); // user written text

  return (
    <div className="w-full max-w-[25rem] min-w-[10rem] px-5">
      <DebouncedSearchInput
        value={query}
        onChange={setQuery}
        delay={500}
        placeholder="Search..."
        onDebounce={(v) => {
          if (!v) return;
          console.log("Search", v);
        }}
        className="search-bar"
      />
      {/* <p>Debounced {debouncedQuery || "-"}</p> This will have what has to be displayed for the future*/}
    </div>
  );
};

export default Search;
