import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ open, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow; //saving previous value
    document.body.style.overflow = "hidden"; // body scroll will be blocked

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
    <div className="fixed inset-0 z-50 ">
      {/*It will cover whole area using inset-0 */}
      {/*This layer will be in front of other layers when it will be opened */}
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 " onClick={onClose}>
        {/*when clicked outside of main part(halfly dark part) it will be closed */}
        {/* center container */}
        <div className="absolute inset-0 flex items-center justify-center p-4 ">
          {/* header */}
          <div className="px-4 py-3 border-b border-pulse-border bg-pulse-bg/90 rounded-3xl">
            <div className="flex place-items-end justify-between gap-2">
              <p className="text-2xl font-semibold text-pulse-text">
                {title || "Modal"}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg border border-pulse-border text-pulse-soft hover:text-pulse-danger cursor-pointer"
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>
            {/* body */}
            <div className="py-10 px-16">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
