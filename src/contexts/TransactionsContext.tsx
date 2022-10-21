import { createContext, ReactNode } from "react";

type TransactionType = {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
};

type TransactionContextType = {
  transactions: TransactionType[];
};

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  return (
    <TransactionsContext.Provider value={{ transactions: [] }}>
      {children}
    </TransactionsContext.Provider>
  );
}
