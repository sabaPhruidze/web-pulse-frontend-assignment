import Header from "../components/header/Header";
import useDashboardData from "../api/hooks/useDashboardData";
import PortfolioSummaryCard from "./dashboard/PortfolioSummaryCard";
import TopMoversCard from "./dashboard/TopMoversCard";
const Dashboard = () => {
  const { data, isLoading, isError, error } = useDashboardData();
  const assets = data?.assets;
  const list = assets?.data ?? [];
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
            <PortfolioSummaryCard summary={data?.portfolio.data} />
            <TopMoversCard title="Top Gainers" assets={list} mode="gainers" />
            <TopMoversCard title="Top Losers" assets={list} mode="losers" />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
