import SectionCard from "../../components/header/ui/SectionCard";
import type { Alerts } from "../../types/alerts";
import { badgeClassBySeverity } from "../../lib/badges";
import { formatTimesSTamp } from "../../lib/format";
type Props = {
  alerts: Alerts;
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
              {formatTimesSTamp(item.timestamp)}
            </p>
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
