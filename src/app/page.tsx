import Button from "@/components/UI/Button";
import StatusBadge from "@/components/UI/StatusBadge";
import Image from "next/image";
import RowActions from "@/components/UI/RowActions";
import Tabs from "@/components/UI/Tabs";
import Overview from "@/components/Overview/Overview";

export default function Home() {
  return (
    <div className="font-sans text-[#1B2528] min-h-screen ">
      <main className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Title & Status */}
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl sm:text-[34px] font-bold">Wallet Ledger</h1>
            <Image
              src="/caret-down.svg"
              alt="Caret Down Icon"
              width={24}
              height={24}
              priority
            />
            <StatusBadge status="Active" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 w-1/2 sm:w-auto">
            <Button variant="primary" className="flex-1 sm:flex-none">Share</Button>
            <RowActions itemId="abc123" />
          </div>
        </div>

        {/* Avatar Group */}
        <div className="flex flex-wrap items-center gap-2">
          <Image
            className="rounded-lg object-cover h-8 w-auto"
            src="/avatar-group.svg"
            alt="avatar group"
            width={110}
            height={32}
          />
          <span className="text-gray-400 text-sm">
            Ava, Liam, Noah +12 others
          </span>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <Tabs
            tabs={[
              {
                key: "overview",
                label: "Overview",
                content: <div><Overview /></div>,
              },
              {
                key: "transactions",
                label: "Transactions",
                content: <div>List of Transactions goes here.</div>,
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
