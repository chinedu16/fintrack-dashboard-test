"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ActionDropdownProps } from "@/types/shared";

export default function ActionDropdown({ actions }: ActionDropdownProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (open) {
      closeDropdown();
    } else {
      setOpen(true);
      setTimeout(() => setVisible(true), 10);
    }
  };

  const closeDropdown = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative text-left flex justify-center items-center"
      ref={ref}
    >
      <button
        onClick={toggleDropdown}
        className="rounded cursor-pointer hover:bg-gray-100 focus:outline-none"
      >
        <Image
          src="/icon-button.svg"
          alt="More actions"
          width={20}
          height={20}
        />
      </button>

      {open && (
        <div
          className={clsx(
            "absolute right-0 top-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 transform",
            visible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <ul className="py-1 text-sm text-gray-700">
            {actions.map((action, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    closeDropdown();
                    action.onClick();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {action.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
