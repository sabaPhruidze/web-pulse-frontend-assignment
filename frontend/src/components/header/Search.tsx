import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState(""); // user written text
  const [debouncedQuery, setDebouncedQuery] = useState(""); // user written text but debounced
  // debounce: it will write after 500ms for less rerender
  useEffect(() => {
    const id = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 500);
    return () => window.clearTimeout(id);
  }, [query]);

  useEffect(() => {
    if (!debouncedQuery) return;
    console.log("Search", debouncedQuery);
  }, []);
  return (
    <div className="w-full max-w-[25rem] min-w-[10rem] px-5">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-3 py-2 rounded-lg bg-pulse-surface border-2 border-pulse-border text-pulse-text placeholder:text-pulse-soft focus:outline-none focus:ring-2 focus:ring-pulse-primary transition-shadow duration-300 ease-in-out"
      />
    </div>
  );
};

export default Search;
