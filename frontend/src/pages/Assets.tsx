import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import AssetFilterTabs from "../components/ui/AssetFilterTabs";
import type { AssetFilter } from "../types/assets";
import AssetSeachBar from "../components/ui/AssetSeachBar";
import AssetsListCard from "../components/ui/AssetsListCard";
import useAssets from "../api/hooks/useAssets";
import { sortAssetsByChangePercent, type SortDir } from "../lib/sortAssets";

function Assets() {
  const [filter, setFilter] = useState<AssetFilter>("all");
  //user wrote
  const [searchInput, setSearchInput] = useState<string>("");
  // filtered for api(debounce)
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isError, error } = useAssets({ filter, search });
  const items = data?.data ?? [];
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const displayedItems = sortAssetsByChangePercent(items, sortDir);
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      <AssetFilterTabs value={filter} onChange={setFilter} />
      <AssetSeachBar
        value={searchInput}
        onChange={setSearchInput}
        onDebounce={setSearch}
      />
      <AssetsListCard
        title="Assets"
        items={items}
        sortDir={sortDir}
        onToggleSort={() =>
          setSortDir((prev) => (Object.is(prev, "asc") ? "desc" : "asc"))
        }
        isLoading={isLoading}
        isError={isError}
        errorMessage={error instanceof Error ? error.message : "Unknown error"}
      />
    </PageLayout>
  );
}

export default Assets;
