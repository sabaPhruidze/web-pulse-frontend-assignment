import React from "react";
import type { TopMover } from "../../types/assets";
import SectionCard from "./SectionCard";
type Props = {
  title?: string;
  items: TopMover[];
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

const formatPct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(2)}%`;
const AssetsListCard = ({
  title = "Assets",
  items,
  isLoading = false,
  isError = false,
  errorMessage,
}: Props) => {
  return (
    <SectionCard title="Assets">
      <div className=" text-pulse-soft font-semibold flex justify-between mt-5">
        <span>Symbol</span>
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
                <div
                  key={asset.id ?? asset.symbol}
                  className="py-3 flex items-center justify-between"
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
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SectionCard>
  );
};

export default AssetsListCard;
