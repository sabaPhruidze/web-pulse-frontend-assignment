import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
import AlertSeveritySummary from "../components/ui/AlertSeveritySummary";
import AlertListItem from "../components/ui/AlertListItem";
const Alerts = () => {
  const { data, isLoading, isError, error } = useAlerts();
  const counts: {
    critical: number;
    high: number;
    medium: number;
    low: number;
  } = { critical: 0, high: 0, medium: 0, low: 0 };

  data?.data.forEach((alert) => {
    counts[alert.severity] += 1;
  });
  return (
    <PageLayout
      title="Alerts"
      subtitle="All alerts, grouped by severity for faster triage."
    >
      <SectionCard title="Alert Center">
        {isLoading && (
          <p className="text-sm text-pulse-soft">Loading alert...</p>
        )}
        {isError && (
          <p className="text-sm text-red-400">
            {error instanceof Error ? error.message : "Failed to load alert"}
          </p>
        )}
        {!isLoading && !isError && (
          <div className="space-y-4 ">
            <AlertSeveritySummary {...counts} />
            {data?.data[0] && (
              <div className="rounded-lg border border-pulse-border p-3">
                <p className="mb-2 text-xs font-semibold text-pulse-soft">
                  First alert preview
                </p>
                <AlertListItem item={data?.data[0]} />
              </div>
            )}
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
