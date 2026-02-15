import type { NewsCategory, NewsImpact } from "../types/news";

export const badgeClassByCategory = (category: NewsCategory) => {
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
export const badgeClassByImpact = (impact: NewsImpact) => {
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
