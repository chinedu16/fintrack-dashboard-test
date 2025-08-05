"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SidebarProps } from "@/types/layout";


const navLinks = [
  { label: "Dashboard", href: "/", comingSoon: false },
  { label: "Transactions", href: "/transactions", comingSoon: true },
  { label: "Reports", href: "/reports", comingSoon: true },
  { label: "Settings", href: "/settings", comingSoon: true },
];

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`transition-all duration-300 bg-white border-r shadow-sm h-full
        ${isOpen ? "w-80" : "w-0 overflow-hidden"}`}
    >
      <nav className={`flex flex-col gap-2 px-4 sm:px-12 py-7 ${isOpen ? "block" : "hidden"}`}>
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className="group"
              onClick={() => {
                if (window.innerWidth < 640) onNavigate();
              }}
            >
              <div
                className={clsx(
                  "flex items-center justify-between px-5 py-2 rounded-3xl transition-colors",
                  isActive
                    ? "bg-gray-200 bg-opacity-16 text-[#3A6C7B] font-semibold"
                    : "text-[#1B2528] hover:bg-gray-100"
                )}
              >
                <span>{label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

