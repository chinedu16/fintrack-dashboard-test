import { StatusBadgeProps } from "@/types/component";

const dotColors: Record<string, string> = {
  Active: "bg-green-600",
  Credit: "bg-green-600",
  Pending: "bg-yellow-500",
  Error: "bg-red-600",
  Debit: "bg-red-600",
  Success: "bg-blue-500",
  Default: "bg-gray-400",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (!status) return null;

  const dotColor = dotColors[status] || dotColors.Default;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-200 text-sm font-medium">
      <span className={`w-2 h-2 rounded-full ${dotColor}`} />
      {status}
    </span>
  );
}
