import Header from "../components/header/Header";
import SectionCard from "../components/header/ui/SectionCard";
import usePortfolio from "../api/portfolio/portfolio";
const Dashboard = () => {
  const { data: portfolio, isLoading, isError } = usePortfolio();
  const { totalValue, totalChange, totalChangePercent } = portfolio?.data ?? {
    totalValue: 0,
    totalChangePercent: 0,
    totalChange: 0,
  };
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
          <div>error</div>
        ) : (
          <>
            <SectionCard title="Portfolio Summary">
              <div className="my-3">
                <p className="text-pulse-soft font-semibold text-sm">
                  Total Value
                </p>
                <strong className="text-pulse-text text-2xl">
                  {totalValue}
                </strong>
              </div>
              <div>
                <p className="text-pulse-soft font-semibold text-sm">
                  Total Change
                </p>
                <strong className="text-pulse-success/80 ">
                  ${totalChange} (+{totalChangePercent}%)
                </strong>
              </div>
            </SectionCard>
            <SectionCard title="Top Gainers">
              <div className="">
                <p className="text-pulse-text font-bold">
                  NVDA{" "}
                  <span className="font-semibold text-pulse-soft text-[14px]">
                    NVIDIA Corporation
                  </span>
                </p>
                <p className="text-xs text-pulse-soft font-semibold">$485.20</p>
                <p className="text-pulse-success/80 text-sm font-bold">
                  +3.45%
                </p>
                <hr className="border-pulse-border mt-5" />
              </div>
            </SectionCard>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
