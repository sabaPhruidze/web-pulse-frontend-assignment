import React from "react";
import type { TopMover } from "../../types/assets";
type Props = {
  title?: string;
};
const AssetsListCard = ({ title = "Assets" }: Props) => {
  return (
    <div className="mt-4 rounded-xl border border-pulse-border bg-pulse-surface2 p-3">
      <p className="text-sm font-bold text-pulse-text mb-2">{title}</p>
      <div className="text-xs text-pulse-soft font-semibold flex justify between">
        <span>Symbol</span>
        <span>Change %</span>
      </div>
      <div className="mt-3 text-sm text-pulse-soft">List part</div>
    </div>
  );
};

export default AssetsListCard;
