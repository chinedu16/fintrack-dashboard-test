"use client";

import { FC } from "react";
import { Ellipsis } from "lucide-react";
import { SummaryCardProps } from "@/types/component";

const SummaryCard: FC<SummaryCardProps> = ({ title, value, change }) => {
  return (
    <div className="bg-gray-200 p-7 rounded-xl w-full max-w-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-[17px] font-semibold">{title}</h3>
        <div className="p-1 rounded-full hover:bg-gray-300 transition-colors">
          <Ellipsis className="text-[#1B2528] w-5 h-5 cursor-pointer" />
        </div>
      </div>
      <div className="text-4xl font-bold">{value}</div>
      <div className="mt-1 flex items-center text-sm font-medium text-[#3E7383]">
        {change}
      </div>
    </div>
  );
};

export default SummaryCard;
