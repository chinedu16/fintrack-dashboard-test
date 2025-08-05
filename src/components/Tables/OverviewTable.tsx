"use client";

import { useState } from "react";
import Image from "next/image";
import StatusBadge from "../UI/StatusBadge";
import { Transaction } from "@/types/shared";

const headers: { key: keyof Transaction; label: string }[] = [
  { key: "date", label: "Date" },
  { key: "remark", label: "Remark" },
  { key: "amount", label: "Amount" },
  { key: "currency", label: "Currency" },
  { key: "type", label: "Type" },
];

const data: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];


const SortableTable = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    const valA = a[key];
    const valB = b[key];

    if (typeof valA === "number" && typeof valB === "number") {
      return direction === "asc" ? valA - valB : valB - valA;
    }

    return direction === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  const handleSort = (key: keyof Transaction) => {
    setSortConfig((prev) =>
      prev?.key === key && prev.direction === "asc"
        ? { key, direction: "desc" }
        : { key, direction: "asc" }
    );
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4 font-semibold text-sm">
          {headers.map((header) => (
            <div
              key={header.key}
              onClick={() => handleSort(header.key)}
              className="flex border-b text-gray-500 border-gray-300 py-4 items-center gap-1 cursor-pointer select-none"
            >
              {header.label}
              {sortConfig?.key === header.key ? (
                sortConfig.direction === "asc" ? (
                  <Image src="/chevron-up.svg" alt="chevron up" width={12} height={6} />
                ) : (
                  <Image src="/chevron-down.svg" alt="chevron down" width={12} height={6} />
                )
              ) : (
                <Image src="/chevron-down.svg" alt="chevron down" className="opacity-30" width={12} height={6} />
              )}
            </div>
          ))}
        </div>

        <div>
          {sortedData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-5 sm:grid-cols-[50%_12%_12%_10%_10%] gap-4"
            >
              <div className="border-b border-gray-300 py-[18px] truncate">{item.date}</div>
              <div className="border-b border-gray-300 py-[18px] truncate">{item.remark}</div>
              <div className="border-b border-gray-300 py-[18px] truncate">
                {item.amount < 0
                  ? `-$${Math.abs(item.amount)}`
                  : `$${item.amount}`}
              </div>
              <div className="border-b border-gray-300 py-[18px] truncate">{item.currency}</div>
              <div className="border-b border-gray-300 py-[18px] truncate">
                <StatusBadge status={item.type} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortableTable;
