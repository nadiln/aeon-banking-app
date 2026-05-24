import { Transaction } from "@/types/transaction";
import { create } from "zustand";

export interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  setTransactions: (data: Transaction[]) => void;
  setLoading: (val: boolean) => void;
  setError: (msg: string | null) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  isLoading: false,
  error: null,
  setTransactions: (data: Transaction[]) => set({ transactions: data }),
  setLoading: (val: boolean) => set({ isLoading: val }),
  setError: (msg: string | null) => set({ error: msg }),
}));
