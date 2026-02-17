import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import AssetFilterTabs, { AssetFilter } from "../components/ui/AssetFilterTabs";
import AssetSeachBar from "../components/ui/AssetSeachBar";
import AssetsListCard from "../components/ui/AssetsListCard";
import useAssets from "../api/hooks/useAssets";
function Assets() {
  const [filter, setFilter] = useState<AssetFilter>("all");
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, isError, error } = useAssets({ filter, search });
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      <AssetFilterTabs value={filter} onChange={setFilter} />
      <AssetSeachBar value={search} onChange={setSearch} />
      <AssetsListCard />
    </PageLayout>
  );
}

export default Assets;
