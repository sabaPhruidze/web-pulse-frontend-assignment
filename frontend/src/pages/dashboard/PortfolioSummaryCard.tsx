import SectionCard from "../../components/header/ui/SectionCard";

type Props = {
  totalValue: number;
  totalChange: number;
  totalChangePercent: number;
};
function PortfolioSummaryCard({
  totalValue,
  totalChange,
  totalChangePercent,
}: Props) {
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
