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
        className="search-bar"
      />
      {/* <p>Debounced {debouncedQuery || "-"}</p> This will have what has to be displayed for the future*/}
    </div>
  );
};

export default Search;
