import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface QueryContextType {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
const QueryContext = createContext<QueryContextType | undefined>(undefined);

// Define a custom hook to access the context
export function useQueryContext() {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryContext must be used within a QueryProvider");
  }
  return context;
}

// Define a provider component
interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
}
