import SectionCard from "../../components/header/ui/SectionCard";
import type { TopMover } from "../../types/assets";

type Props = {
  title: string;
  assets: TopMover[];
  mode: "gainers" | "losers";
};

function TopMoversCard({ title, assets = [], mode }: Props) {
  const filtered = Object.is(mode, "gainers")
    ? assets.filter((x) => x.changePercent > 0)
    : assets.filter((x) => x.changePercent < 0);
  const sorting = Object.is(mode, "gainers")
    ? [...filtered].sort((a, b) => b.changePercent - a.changePercent)
    : [...filtered].sort((a, b) => a.changePercent - b.changePercent);
  const topThree = sorting.slice(0, 3);
  const percentClass =
    mode === "gainers" ? "text-pulse-success/80" : "text-pulse-danger";
  return (
    <SectionCard title={title}>
      {topThree.map(
        ({ id, symbol, name, sector, currentPrice, changePercent }, idx) => (
          <div key={id}>
            <div className="flex items-center justify-between">
              <p className="text-pulse-text font-bold mt-3">
                {symbol}{" "}
                <span className="font-semibold text-pulse-soft text-[14px]">
                  {name}
                </span>
              </p>
              <p className="text-right text-pulse-soft">{sector || "Crypto"}</p>
            </div>
            <p className="text-xs text-pulse-soft font-semibold mb-3">
              ${currentPrice}
            </p>
            <p className={`${percentClass} text-sm font-bold text-right`}>
              {Object.is(mode, "gainers")
                ? `+${changePercent}%`
                : `-${changePercent}%`}
            </p>
            {idx !== topThree.length - 1 && (
              <hr className="border-pulse-border mt-5" />
            )}
          </div>
        ),
      )}
    </SectionCard>
  );
}

export default TopMoversCard;
