import { SortDir } from "../../lib/sortAssets";
import type { TopMover } from "../../types/assets";
import SectionCard from "./SectionCard";
type Props = {
  title?: string;
  items: TopMover[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;

  sortDir?: SortDir;
  onToggleSort?: () => void;

  onAssetClick?: (asset: TopMover) => void;
  onAssetHover?: (asset: TopMover) => void;
};

const formatPct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(2)}%`;
const AssetsListCard = ({
  items,
  isLoading = false,
  isError = false,
  errorMessage,
  sortDir,
  onToggleSort,
  onAssetClick,
  onAssetHover,
}: Props) => {
  return (
    <SectionCard title="Assets">
      <div className=" text-pulse-soft font-semibold flex justify-between mt-5">
        <button
          type="button"
          onClick={onToggleSort}
          className="flex items-center gap-2"
        >
          <span>Symbol</span>
          <span className="text-xs">
            {Object.is(sortDir, "asc") ? "▲" : "▼"}{" "}
            {/*used Unicode's not to search odnwload and than import images */}
          </span>
        </button>
        <span>Change %</span>
      </div>

      <div className="mt-2 border-t border-pulse-border/60">
        {isLoading ? (
          <p className="mt-3 text-sm text-pulse-soft">Loading...</p>
        ) : isError ? (
          <p className="mt-3 text-sm text-red-400">
            {errorMessage || "Error loading assets"}
          </p>
        ) : items.length === 0 ? (
          <p className="mt-3 text-sm text-pulse-soft">No results.</p>
        ) : (
          <div className="mt-2 divide-y divide-pulse-border/60 ">
            {items.map((asset) => {
              const isUp = asset.changePercent >= 0;
              return (
                <button
                  key={asset.id ?? asset.symbol}
                  type="button"
                  onClick={() => onAssetClick?.(asset)} // if onAssetClick exist than it calls that function passing asset
                  onMouseEnter={() => onAssetHover?.(asset)} // on button until w-full is written it contains only the part that is necessary
                  className="w-full py-3 flex items-center justify-between text-left rounded cursor-pointer hover:bg-pulse-card/40"
                >
                  <div>
                    <p className="text-pulse-text font-bold text-sm">
                      {asset.symbol}
                    </p>
                    <p className="text-pulse-soft text-xs">{asset.name}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={[
                        "text-sm font-bold",
                        isUp ? "text-pulse-success" : "text-pulse-danger",
                      ].join(" ")}
                    >
                      {formatPct(asset.changePercent)}
                    </p>
                    <p className="text-pulse-muted font-semibold">
                      ${asset.currentPrice.toLocaleString()}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </SectionCard>
  );
};

export default AssetsListCard;
