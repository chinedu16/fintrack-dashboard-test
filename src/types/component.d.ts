import { ReactNode } from "react";

export interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
}

export interface StatusBadgeProps {
  status: "Active" | "Pending" | "Error" | "Success" | "Credit" | "Debit" | string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

interface Tab {
  key: string;
  label: string;
  content: React.ReactNode;
}


export interface TabsProps {
  tabs: Tab[];
  initialActiveKey?: string;
}
