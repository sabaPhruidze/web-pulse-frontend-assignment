import PageLayout from "../components/layout/PageLayout";
import Header from "../components/header/Header";

function Assets() {
  return (
    <PageLayout
      title="Assets"
      subtitle="Unified view of stocks and crypto currencies"
    >
      {/* Tabs */}
      <div className="mt-4 flex gap-2">
        <button className="border border-pulse-border px-3 py-2 rounded-lg bg-pulse-surface text-pulse-text text-sm font-semibold">
          All
        </button>
        <button className="border border-pulse-border px-3 py-2 rounded-lg bg-pulse-surface text-pulse-text text-sm font-semibold">
          {" "}
          Stocks Only
        </button>
        <button className="border border-pulse-border px-3 py-2 rounded-lg bg-pulse-surface text-pulse-text text-sm font-semibold">
          Crypto Only
        </button>
      </div>
      <div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="Search by symbol or name..."
            className="search-bar"
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default Assets;
