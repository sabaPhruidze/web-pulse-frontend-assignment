import AlertListItem from "./AlertListItem";
import type { AlertsData } from "../../types/alerts";

type Props = {
  items: AlertsData[];
};
const AlertList = ({ items }: Props) => {
  if (!items.length) {
    return (
      <p className="text-sm font-semibold text-pulse-soft">No alerts found</p>
    );
  }
  return (
    <div className="rounded-lg border border-pulse-border p-3">
      {items.map((item, index) => (
        <AlertListItem
          key={item.id}
          item={item}
          showDivider={index !== items.length - 1}
        />
      ))}
    </div>
  );
};

export default AlertList;
