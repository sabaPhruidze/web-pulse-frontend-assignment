import { Menu } from "lucide-react";
import Search from "./Search";
import SUNNY from "../../assets/icons/sunny.png";
const Header = () => {
  return (
    <div className="w-full h-16 text-pulse-text bg-pulse-surface2 border-4 border-pulse-border flex  justify-between items-center px-4">
      <button className="bg-pulse-surface2 text-white border-pulse-border rounded-lg p-2 border-2">
        <Menu className="w-5 h-5" />
      </button>
      <Search />
      <div className="flex gap-3 items-center">
        <p className="text-xl font-bold text-pulse-secondary">Pulse</p>
        <button className="bg-pulse-surface2 text-white border-pulse-border rounded-lg border-2 w-10 h-10 p-2">
          <img src={SUNNY} alt="sun yellow and bright" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
