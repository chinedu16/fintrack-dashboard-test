export interface HeaderBarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}