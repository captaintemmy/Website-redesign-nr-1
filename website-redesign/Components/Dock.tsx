/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

"use client";

import React, { useState } from "react";
import type { ReactNode } from "react";

interface DockItemData {
  icon: ReactNode;
  label: ReactNode;
  onClick?: () => void;
  className?: string;
  menuOptions?: { label: string; onClick: () => void }[];
}

interface DockProps {
  items: DockItemData[];
  className?: string;
}

// Removed broken type blocks. Only valid interfaces are now present above.

function DockItem({
  icon,
  label,
  onClick,
  className = "",
  selected = false,
}: DockItemData & { selected?: boolean }) {
  return null; // Implementation moved to Dock below
}
export default function Dock(props: DockProps) {
  const { items, className = "" } = props;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <nav
      className={`flex flex-col items-start justify-start w-full h-full pt-2 pl-2 relative`}
      role="navigation"
      aria-label="Vertical dock"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center"
          onMouseEnter={() => setHoveredIdx(index)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <button
            onClick={() => {
              setSelectedIdx(index);
              item.onClick && item.onClick();
            }}
           className={`flex flex-col items-center justify-center rounded-lg p-2 w-14 mb-2 transition
           ${
             selectedIdx === index
               ? "bg-gray-800 text-white"
               : "bg-gray-100 text-black opacity-60"
           }
           hover:bg-gray-800 hover:text-white hover:opacity-100
           ${item.className}`}
            tabIndex={0}
            aria-label={typeof item.label === "string" ? item.label : undefined}
          >
            <span className="text-2xl mb-0.5">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </button>
          {hoveredIdx === index &&
            item.menuOptions &&
            item.menuOptions.length > 0 && (
              <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-[120px] flex flex-col">
                {item.menuOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={opt.onClick}
                    className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
        </div>
      ))}
    </nav>
  );
}
