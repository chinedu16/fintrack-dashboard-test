// Overview.tsx
"use client";

import SummaryCard from "@/components/SummaryCard/SummaryCard";
import OverviewTable from "@/components/Tables/OverviewTable";

const Overview = () => {
  const summaries = [
    { title: "Total Balance", value: "$12,345", change: "+5%" },
    { title: "Total Credits", value: "$7,890", change: "+3%" },
    { title: "Total Debits", value: "$4,455", change: "-2%" },
    { title: "Transactions", value: "150", change: "+10%" },
  ];

  return (
    <section className="w-full">
      <h2 className="text-xl font-bold mb-5">Summary</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {summaries.map((item) => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </div>
      <div className="mt-10">
          <OverviewTable />
      </div>
    </section>
  );
};

export default Overview;
