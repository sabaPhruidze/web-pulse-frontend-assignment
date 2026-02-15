import SectionCard from "../../components/header/ui/SectionCard";
import type { News, NewsCategory, NewsImpact } from "../../types/news";
import { formatTimesSTamp } from "../../lib/format";
type Props = {
  news: News;
};
// for making an order

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
const badgeClassByImpact = (impact: NewsImpact) => {
  switch (impact) {
    case "low":
      return "bg-pulse-border/40 text-pulse-soft border border-pulse-border";
    case "medium":
      return "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20";
    case "high":
      return "bg-orange-500/10 text-orange-300 border border-orange-500/20";
    case "critical":
      return "bg-red-500/10 text-red-300 border border-red-500/20";
    default:
      return "bg-pulse-border/40 text-pulse-soft border border-pulse-border";
  }
};

function LatestNewsCard({ news }: Props) {
  const items = news?.data?.slice(0, 5) ?? [];
  return (
    <SectionCard title="Recent News">
      <p className="text-xs text-pulse-soft font-semibold  mt-1">Latest 5</p>
      <div className="mt-3">
        {items.map((item, idx) => {
          const visibleTags = item.tags.slice(0, 3);
          const remainingTags = item.tags.length - visibleTags.length;
          return (
            <div key={item.id} className="py-2">
              <div className="flex items-start justify-between gap-3">
                <p className="text-pulse-text font-bold text-sm">
                  {item.title}
                </p>
                <div className="flex gap-2">
                  <span
                    className={`px-2 py-1 rounded-full text-[11px] font-semibold ${badgeClassByCategory(item.category)}`}
                  >
                    {item.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${badgeClassByImpact(item.impact)}`}
                  >
                    {item.impact}
                  </span>
                </div>
              </div>
              <p className="text-xs text-pulse-soft font-semibold mt-2">
                {item.source} • {formatTimesSTamp(item.timestamp)}
              </p>
              <p className="text-sm text-pulse-muted mt-2 font-semibold">
                {item.summary}
              </p>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {visibleTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-sm font-semibold bg-pulse-border/40 text-pulse-soft border border-pulse-border"
                    >
                      #{tag}
                    </span>
                  ))}
                  {remainingTags > 0 && (
                    <span className="px-2 py-1 rounded-full text-sm font-semibold bg-pulse-border/40 text-pulse-soft border border-pulse-border">
                      +{remainingTags}
                    </span>
                  )}
                </div>
              )}
              {idx !== items.length - 1 && (
                <hr className="border-pulse-border mt-4" />
              )}
            </div>
          );
        })}
        {!items.length && (
          <p className="text-sm text-pulse-soft mt-3">No news available.</p>
        )}
      </div>
    </SectionCard>
  );
}

export default LatestNewsCard;
