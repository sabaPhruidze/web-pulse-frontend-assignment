import { formatTimesSTamp } from "../../lib/format";
import { badgeClassBySeverity } from "../../lib/badges";
import type { AlertsData } from "../../types/alerts";

type Props = {
  item: AlertsData;
  showDivider?: boolean;
};
const AlertListItem = ({ item, showDivider = false }: Props) => {
  const heading = item.title ?? item?.type?.replaceAll("_", " ");
  const assetLabel = item.assetId ?? "GLOBAL";
  return (
    <div className="py-2">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-bold text-pulse-text capitalize">
          {heading}
        </p>
        <span
          className={`rounded-full px-2 py-1 text-sm font-semibold ${badgeClassBySeverity(item.severity)}`}
        >
          {item.severity}
        </span>
      </div>
      <p className="mt-2 text-xs font-semibold text-pulse-soft">
        {assetLabel} • {item.assetType} • {formatTimesSTamp(item.timestamp)}
      </p>
      <p className="mt-2 text-sm font-semibold text-pulse-muted">
        {item.message}
      </p>
      {item.affectedAssets && (
        <p className="mt-2 text-xs font-semibold text-pulse-soft">
          Affected: {item.affectedAssets.join(", ")}
        </p>
      )}
      {showDivider && <hr className="mt-4 border-pulse-border" />}
    </div>
  );
};

export default AlertListItem;
