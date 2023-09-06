import React, { createContext, useContext, useState, ReactNode } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  imgUrl?: string;
  delivery?: boolean;
};

type ResultsState = {
  results: Book[]; // Change 'string[]' to 'Book[]'
  setResults: React.Dispatch<React.SetStateAction<Book[]>>; // Change 'string[]' to 'Book[]'
};

const ResultsContext = createContext<ResultsState | undefined>(undefined);

export const useResults = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResults must be used within a ResultsProvider");
  }
  return context;
};

type ResultsProviderProps = {
  children: ReactNode;
};

export const ResultsProvider = ({ children }: ResultsProviderProps) => {
  const [results, setResults] = useState<Book[]>([]); // Change 'string[]' to 'Book[]'

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
};
