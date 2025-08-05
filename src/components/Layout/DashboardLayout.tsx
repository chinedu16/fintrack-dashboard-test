"use client";

import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HeaderBar from "../HeaderBar/HeaderBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    setIsSidebarOpen(!isMobile);
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <HeaderBar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="grid grid-cols-[auto_1fr] h-full overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onNavigate={() => setIsSidebarOpen(false)} />
        <main className="overflow-y-auto bg-[#FCFDFD] text-[#1B2528] p-4 sm:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
