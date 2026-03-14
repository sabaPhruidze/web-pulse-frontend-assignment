import AlertList from "./AlertList";
import type { AlertsData } from "../../types/alerts";
import type { NewsImpact } from "../../types/news";
import { useState } from "react";

type Props = {
  title: string;
  severity: NewsImpact;
  items: AlertsData[];
};
const AlertSeverityGroup = ({ title, severity, items }: Props) => {
  const [isOpen, setIsOpen] = useState(severity === "medium");
  if (!items.length) return null;

  const severityClasses = {
    critical: "border-red-500/40 bg-red-500/10",
    high: "border-orange-500/40 bg-orange-500/10",
    medium: "border-yellow-500/40 bg-yellow-500/10",
    low: "border-blue-500/40 bg-blue-500/10",
  };
  return (
    <section className="space-y-1">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex w-full items-center justify-between rounded-lg border p-3 text-left ${severityClasses[severity]}`}
      >
        <div>
          <h3 className="text-sm font-bold text-pulse-text">{title}</h3>
          <p className="text-xs font-semibold text-pulse-soft capitalize">
            {severity} severity
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-pulse-border px-2 py-1 text-xs font-bold text-pulse-text">
            {items.length}
          </span>
          <span className="text-sm font-bold text-pulse-text">
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </button>

      {isOpen && <AlertList items={items} />}
    </section>
  );
};

export default AlertSeverityGroup;
