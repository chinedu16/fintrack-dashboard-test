export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

interface Action {
  label: string;
  onClick: () => void;
}

export interface ActionDropdownProps {
  actions: Action[];
}