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
  return <div>TopMoversCard</div>;
}

export default TopMoversCard;
