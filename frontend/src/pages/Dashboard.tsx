import Header from "../components/header/Header";
import SectionCard from "../components/header/ui/SectionCard";
const Dashboard = () => {
  return (
    <div className="bg-pulse-bg min-h-screen">
      <Header />
      <div className="p-5 ">
        <h1 className="text-3xl font-bold mb-2 text-pulse-text">Dashboard</h1>
        <p className="text-sm text-pulse-soft font-semibold">
          Portfolio snapshot and market overview
        </p>
        <SectionCard title="Portfolio Summary">
          <div className="my-3">
            <p className="text-pulse-soft font-semibold text-sm">Total Value</p>
            <strong className="text-pulse-text text-2xl">$125,000.50</strong>
          </div>
          <div>
            <p className="text-pulse-soft font-semibold text-sm">
              Total Change
            </p>
            <strong className="text-pulse-success/80 ">
              $3,250.75 (+2.67%)
            </strong>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default Dashboard;
