import PageLayout from "../components/layout/PageLayout";
import SectionCard from "../components/ui/SectionCard";
const Alerts = () => {
  return (
    <PageLayout
      title="Alerts"
      subtitle="All alerts, grouped by severity for faster triage."
    >
      <SectionCard title="Alert Center">
        <div>
          <p>Alerts page shell is ready</p>
          <p>Next step is to add a route</p>
        </div>
      </SectionCard>
    </PageLayout>
  );
};

export default Alerts;
