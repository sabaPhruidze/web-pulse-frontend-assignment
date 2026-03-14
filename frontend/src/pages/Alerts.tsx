import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
import useAlerts from "../api/hooks/useAlerts";
import AlertSeveritySummary from "../components/ui/AlertSeveritySummary";
import AlertListItem from "../components/ui/AlertListItem";
import AlertList from "../components/ui/AlertList";
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
            <AlertList items={data?.data || []} />
          </div>
        )}
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
