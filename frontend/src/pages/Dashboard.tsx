import Header from "../components/header/Header";
import SectionCard from "../components/header/ui/SectionCard";
import useDashboardData from "../api/hooks/useDashboardData";
import PortfolioSummaryCard from "./dashboard/PortfolioSummaryCard";
const Dashboard = () => {
  const { data, isLoading, isError, error } = useDashboardData();
  const portfolio = data?.portfolio;
  const assets = data?.assets;
  const { totalValue, totalChange, totalChangePercent } = portfolio?.data ?? {
    totalValue: 0,
    totalChangePercent: 0,
    totalChange: 0,
  };

  const list = assets?.data ?? [];
  const topGainers = [...list]
    .sort((a, b) => b.changePercent - a.changePercent) //by this it will align them by the order of From top to bottom
    .slice(0, 3);
  return (
    <div className="bg-pulse-bg min-h-screen">
      <Header />
      <div className="p-5 ">
        <h1 className="text-3xl font-bold mb-2 text-pulse-text">Dashboard</h1>
        <p className="text-sm text-pulse-soft font-semibold">
          Portfolio snapshot and market overview
        </p>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <div className="mt-4 text-red-400">
            Error loading Dashboard data
            <div className="text-xs opacity-80 mt-1">
              {error instanceof Error ? error.message : "Unknown error"}
            </div>
          </div>
        ) : (
          <>
            <PortfolioSummaryCard
              totalValue={totalValue}
              totalChange={totalChange}
              totalChangePercent={totalChangePercent}
            />
            <SectionCard title="Top Gainers">
              {topGainers.map(
                (
                  { id, symbol, name, sector, currentPrice, changePercent },
                  idx,
                ) => (
                  <div key={id}>
                    <div className="flex items-center justify-between">
                      <p className="text-pulse-text font-bold mt-3">
                        {symbol}{" "}
                        <span className="font-semibold text-pulse-soft text-[14px]">
                          {name}
                        </span>
                      </p>
                      <p className="text-right text-pulse-soft">
                        {sector || "Crypto"}
                      </p>
                    </div>
                    <p className="text-xs text-pulse-soft font-semibold mb-3">
                      ${currentPrice}
                    </p>
                    <p className="text-pulse-success/80 text-sm font-bold text-right">
                      +{changePercent}%
                    </p>
                    {idx !== topGainers.length - 1 && (
                      <hr className="border-pulse-border mt-5" />
                    )}
                  </div>
                ),
              )}
            </SectionCard>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
