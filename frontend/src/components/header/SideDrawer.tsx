import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SideDrawer = ({ open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed left-0 top-0 h-screen w-[260px] bg-pulse-surface2 border-r border-pulse-border z-50"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: "tween", duration: 0.22 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-pulse-border">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-pulse-text">Pulse</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-lg border border-pulse-border bg-pulse-surface text-pulse-text flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <nav className="p-3 space-y-1">
              <NavLink
                to="/"
                end
                onClick={onClose}
                className={({ isActive }) =>
                  `link-base ${isActive ? "link-active" : "link-iddle"}`
                }
              >
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="/assets"
                onClick={onClose}
                className={({ isActive }) =>
                  `link-base ${isActive ? "link-active" : "link-iddle"}`
                }
              >
                <span>Assets</span>
              </NavLink>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
