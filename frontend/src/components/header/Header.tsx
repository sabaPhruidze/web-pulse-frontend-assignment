import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-16 text-pulse-text bg-pulse-surface2 border-4 border-pulse-border">
      <button className="bg-pulse-surface2 text-white border-pulse-border">
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Header;
