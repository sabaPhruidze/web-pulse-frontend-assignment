export type NavItem = {
  label: string;
  path: string;
};
export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", path: "/" },
  { label: "Assets", path: "/assets" },
  { label: "News", path: "/news" },
  { label: "Alerts", path: "/alerts" },
];
