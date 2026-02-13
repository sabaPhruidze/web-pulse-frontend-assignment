import SectionCard from "../../components/header/ui/SectionCard";
import type { Data } from "../../types/portfolio";

type Props = {
  summary?: Data;
};
function PortfolioSummaryCard({ summary }: Props) {
  const { totalValue, totalChange, totalChangePercent } = summary ?? {
    totalValue: 0,
    totalChangePercent: 0,
    totalChange: 0,
  };
  return (
    <SectionCard title="Portfolio Summary">
      <div className="my-3">
        <p className="text-pulse-soft font-semibold text-sm">Total Value</p>
        <strong className="text-pulse-text text-2xl">{totalValue}</strong>
      </div>
      <div>
        <p className="text-pulse-soft font-semibold text-sm">Total Change</p>
        <strong className="text-pulse-success/80 ">
          ${totalChange} (+{totalChangePercent}%)
        </strong>
      </div>
    </SectionCard>
  );
}

export default PortfolioSummaryCard;
