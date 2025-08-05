"use client";

import { useState } from "react";
import clsx from "clsx";
import { TabsProps } from "@/types/component";

export default function Tabs({ tabs, initialActiveKey }: TabsProps) {
  const [active, setActive] = useState(initialActiveKey || tabs[0]?.key);

  const activeTab = tabs.find((tab) => tab.key === active);

  return (
    <div className="w-full">
      {/* Tab Bar */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={clsx(
              "py-3 px-7 cursor-pointer text-sm font-medium transition-colors",
              active === tab.key
                ? "border-b-2 border-[#437D8E] text-[#437D8E]"
                : "text-gray-500"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content with transition */}
      <div
        key={active} // 🔑 Ensures animation runs on tab change
        className="mt-7 transition-all duration-300 ease-in-out opacity-0 animate-fade-in"
      >
        {activeTab?.content}
      </div>
    </div>
  );
}
