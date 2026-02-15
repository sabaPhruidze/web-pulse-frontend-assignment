import SectionCard from "../../components/header/ui/SectionCard";
import type { AlertsData, Alerts } from "../../types/alerts";
import { formatTimesSTamp } from "../../lib/format";
type Props = {
  alerts: Alerts;
};

const badgeClassBySeverity = (severity: AlertsData["severity"]) => {
  switch (severity) {
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
const ActiveAlertsCard = ({ alerts }: Props) => {
  const items = alerts.data.slice(0, 5);
  return (
    <SectionCard title="Active Alerts">
      <p className="text-xs text-pulse-soft font-semibold mt-1">Latest 5</p>
      <div className="mt-3">
        {items.map((item, idx) => (
          <div className="py-2" key={item.id}>
            <div className="flex items-start justify-between gap-3">
              <p className="text-pulse-text font-bold text-sm">
                {item.message}
              </p>
              <span
                className={`px-2 py-1 rounded-full text-sm font-semibold ${badgeClassBySeverity(item.severity)}`}
              >
                {item.severity}
              </span>
            </div>
            <p className="text-xs text-pulse-soft font-semibold mt-2">
              {idx !== items.length - 1 && (
                <hr className="border-pulse-border mt-4" />
              )}
            </p>
          </div>
        ))}
        {!items.length && (
          <p className="text-sm text-pulse-soft mt-3">No Alerts avaliable</p>
        )}
      </div>
    </SectionCard>
  );
};

export default ActiveAlertsCard;
