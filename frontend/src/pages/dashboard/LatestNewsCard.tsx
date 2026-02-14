import SectionCard from "../../components/header/ui/SectionCard";
import type { News, NewsCategory } from "../../types/news";
type Props = {
  news: News;
};
// for making an order
const formatTimesSTamp = (iso: string) => {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
};
const badgeClassByCategory = (category: NewsCategory) => {
  switch (category) {
    case "market":
      return "bg-blue-500/10 text-blue-300 border border-blue-500/20";
    case "crypto":
      return "bg-purple-500/10 text-purple-300 border border-purple-500/20";
    case "technology":
      return "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20";
    case "macro":
      return "bg-amber-500/10 text-amber-300 border border-amber-500/20";
    case "earnings":
      return "bg-green-500/10 text-green-300 border border-green-500/20";
    case "regulatory":
      return "bg-rose-500/10 text-rose-300 border border-rose-500/20";
    default:
      return "bg-pulse-border/50 text-pulse-text border border-pulse-border";
  }
};

function LatestNewsCard({ news }: Props) {
  const items = news?.data?.slice(0, 5) ?? [];
  return (
    <SectionCard title="Recent News">
      <p className="text-xs text-pulse-soft font-semibold  mt-1">Latest 5</p>
      <div className="mt-3">
        {items.map((item, idx) => (
          <div key={item.id} className="py-2">
            <div className="flex items-start justify-between gap-3">
              <p className="text-pulse-text font-bold text-sm">{item.title}</p>
              <span
                className={`px-2 py-1 rounded-full text-[11px] font-semibold ${badgeClassByCategory(item.category)}`}
              >
                {item.category}
              </span>
            </div>
            <p className="text-xs text-pulse-soft font-semibold mt-2">
              {item.source} • {formatTimesSTamp(item.timestamp)}
            </p>
            {idx !== items.length - 1 && (
              <hr className="border-pulse-border mt-4" />
            )}
          </div>
        ))}
        {!items.length && (
          <p className="text-sm text-pulse-soft mt-3">No news available.</p>
        )}
      </div>
    </SectionCard>
  );
}

export default LatestNewsCard;
