"use client";

import ActionDropdown from "./ActionDropdown";

export default function RowActions({ itemId }: { itemId: string }) {
  return (
    <ActionDropdown
      actions={[
        {
          label: "Edit",
          onClick: () => {
            console.log("Edit clicked for", itemId);
          },
        },
        {
          label: "Delete",
          onClick: () => {
            console.log("Delete clicked for", itemId);
          },
        },
      ]}
    />
  );
}
