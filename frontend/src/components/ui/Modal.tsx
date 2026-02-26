import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50">
      {" "}
      {/*This layer will be in front of other layers when it will be opened */}
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}>
        {/*when clicked outside of main part(halfly dark part) it will be closed */}
        {/* center container */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-pulse-border">
            <p className="text-sm font-semibold text-pulse-text">
              {title || "Modal"}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg border border-pulse-border text-pulse-soft hover:text-pulse-danger cursor-pointer"
              aria-label="Close modal"
            >
              X
            </button>
            {/* body */}
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
