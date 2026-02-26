import Modal from "../ui/Modal";
import type { TopMover } from "../../types/assets";

type AssetDetailsModalProps = {
  open: boolean;
  asset: TopMover | null;
  onClose: () => void;
};

const AssetDetailsModal = ({
  open,
  asset,
  onClose,
}: AssetDetailsModalProps) => {
  if (!asset) return null;

  return (
    <Modal open={open} title={`${asset.symbol} details`} onClose={onClose}>
      <div>
        <p>{asset.name}</p>
      </div>
    </Modal>
  );
};

export default AssetDetailsModal;
