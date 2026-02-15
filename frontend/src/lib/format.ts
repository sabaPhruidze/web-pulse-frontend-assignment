export const formatTimesSTamp = (iso: string) => {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
};
