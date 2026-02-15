import SectionCard from "../../components/header/ui/SectionCard";
import type { News } from "../../types/news";
import { formatTimesSTamp } from "../../lib/format";
import { badgeClassByCategory, badgeClassByImpact } from "../../lib/badges";
type Props = {
  news: News;
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
