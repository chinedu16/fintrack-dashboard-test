import Image from "next/image";
import Link from "next/link";
import { HeaderBarProps } from "@/types/layout";

export default function HeaderBar({
  isSidebarOpen,
  onToggleSidebar,
}: HeaderBarProps) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-12 py-4 border-b bg-white">
      <div className="flex items-center gap-4">
        {/* Toggle button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {/* Hamburger or collapse icon */}
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <Link href={"/"}>
        <Image
          className=""
          src="/logo.svg"
          alt="Next.js logo"
          width={112}
          height={32}
          priority
        />
        </Link>
      </div>

      <div className="flex items-center gap-7">
        <Image src="/search.svg" alt="search" width={20} height={20} />
        <Image src="/app-grid.svg" alt="grid" width={20} height={20} />
        <Image
          src="/profile.svg"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  );
}
